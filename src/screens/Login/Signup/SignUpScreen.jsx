import React from 'react';
import {Formik, Field} from 'formik';
import * as yup from 'yup';
import {
  Text,
  View,
  Image,
  Pressable,
  TouchableHighlight,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {styles} from './styles';
import {Input, SeparationComponent} from '../../../components';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import firestore from '@react-native-firebase/firestore';
import { firebase } from "@react-native-firebase/firestore"

const image = require('../../../images/icon.jpg');

GoogleSignin.configure({
  webClientId: '734926813510-jbluslcujftauaoabas3jor0umnu7pmq.apps.googleusercontent.com',
});

async function onGoogleButtonPress() {
  // Check if your device supports Google Play
  await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
  // Get the users ID token
  const { idToken } = await GoogleSignin.signIn();
  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  // Sign-in the user with the credential
  return auth().signInWithCredential(googleCredential);
}

let registerSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  email: yup
    .string()
    .email('Please enter a valid email')
    .required('Email address is required'),
  password: yup
    .string()
    .min(8, ({min}) => `Password must be al leat ${min} characters`)
    .required('Password is required'),
});

export const SignUpScreen = ({navigation}) => {
  return (
<Formik
      validationSchema={registerSchema}
      initialValues={{ email: '', password: '', username: '' }}
      onSubmit={async values => {
        try {
          // Create user account
          const { user } = await auth().createUserWithEmailAndPassword(values.email, values.password);

          // Use the user's UID as the document ID in Firestore
          await firestore().collection('users').doc(user.uid).set({
            username: values.username,
            email: values.email,
          });

          Alert.alert('Success', 'User created!', [
            {
              text: 'Ok', onPress: () => console.log('ok, pressed')
            }
          ]);
        } catch (error) {
          // Handle error
          if (error.code === 'auth/email-already-in-use') {
            Alert.alert('Error', 'That email address is already in use!')
          } else if (error.code === 'auth/invalid-email') {
            Alert.alert('Error', 'That email address is invalid!');
          } else {
            console.error(error);
          }
        }
      }}>
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        touched,
        isValid,
        errors,
      }) => (
        <KeyboardAvoidingView style={styles.container} behavior="height">
          {/* top */}
          <View style={styles.top}>
            <View style={styles.titleContainer}>
              <Image source={image} style={styles.icon} />
              <Text style={styles.title}>Gastro-Lab</Text>
            </View>
            <Text style={styles.subtitle}>Cook without limits</Text>
          </View>

          {/* form */}
          <View style={styles.formContainer}>
            {/* inputs */}
            <Field
              component={Input}
              name="username"
              placeholder="John Doe"
              label="User Name"
            />
            <Field
              component={Input}
              name="email"
              placeholder="john@doe.com"
              label="Emaill address"
              keyboardType="email-address"
            />
            <Field
              component={Input}
              name="password"
              placeholder="Password"
              label="Password"
              secureTextEntry
            />

            <Pressable
              onPress={handleSubmit}
              style={({pressed}) => [
                {
                  backgroundColor: pressed ? '#ffd60a' : '#003566',
                  marginTop: 20,
                },
                styles.button,
              ]}>
              {({pressed}) => (
                <Text
                  style={[
                    {color: pressed ? '#000814' : '#f2f2f2'},
                    styles.textButton,
                  ]}>
                  Register
                </Text>
              )}
            </Pressable>

            <SeparationComponent data={'Or'} />

            <Pressable
              onPress={() => onGoogleButtonPress().then(() => Alert.alert('Succesfull', 'User login!!'))}
              style={({pressed}) => [
                {
                  backgroundColor: pressed ? '#003566' : '#ffd60a',
                },
                styles.button,
              ]}>
              {({pressed}) => (
                <>
                  <Ionicons
                    name={'logo-google'}
                    size={18}
                    color={pressed ? '#f2f2f2' : '#000814'}
                  />
                  <Text
                    style={[
                      {color: pressed ? '#f2f2f2' : '#000814'},
                      styles.textButton,
                    ]}>
                    Google
                  </Text>
                </>
              )}
            </Pressable>
          </View>

          <View style={styles.bottom}>
            <Text>Already have an account?</Text>
            <TouchableHighlight onPress={() => navigation.navigate('SignIn')}>
              <Text style={styles.link}>Sign In</Text>
            </TouchableHighlight>
          </View>
        </KeyboardAvoidingView>
      )}
    </Formik>
  );
};
