import React from 'react';
import {Text, View, Image, Pressable, TouchableHighlight} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {styles} from './styles';
import {Input, SeparationComponent} from '../../../components';

const image = require('../../../images/icon.jpg');

export const SignInScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
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
        <Input label={'Email Address'} placeholder={'john@doe.com'} />
        <Input
          label={'Password'}
          secure={true}
          placeholder={'min. 8 characters'}
        />

        <Pressable
          onPress={() => {
            console.log('hi')
          }}
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
              Sign In
            </Text>
          )}
        </Pressable>

        <SeparationComponent data={'Or'} />

        <Pressable
          onPress={() => {
            console.log('hi')
          }}
          style={({pressed}) => [
            {
              backgroundColor: pressed ? '#003566' : '#ffd60a',
            },
            styles.button,
          ]}>
          {({pressed}) => (
            <>
              <Ionicons name={'logo-google'} size={18} color={pressed ? '#f2f2f2' : '#000814'} />
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
        <Text>Don’t have an account?</Text>
        <TouchableHighlight onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.link}>Register</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};
