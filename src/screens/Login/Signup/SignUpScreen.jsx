import React from 'react';
import {Formik, Field} from 'formik';
import * as yup from 'yup';
import {Text, View, Image, Pressable, TouchableHighlight, KeyboardAvoidingView} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {styles} from './styles';
import {Input, SeparationComponent} from '../../../components';

const image = require('../../../images/icon.jpg');

let registerSchema = yup.object().shape({
  username: yup
    .string()
    .required("Username is required"),
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
      initialValues={{email: '', password: '', username: ''}}
      onSubmit={values => console.log(values)}>
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        touched,
        isValid,
        errors,
      }) => (
        <KeyboardAvoidingView style={styles.container}  behavior="height">
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
            <Field component={Input} name="username" placeholder="John Doe" label="User Name" />
            <Field component={Input} name="email" placeholder="john@doe.com" label="Emaill address" keyboardType="email-address" />
            <Field component={Input} name="password" placeholder="Password" label="Password" secureTextEntry />

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
              onPress={() => {
                console.log('hi');
              }}
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
