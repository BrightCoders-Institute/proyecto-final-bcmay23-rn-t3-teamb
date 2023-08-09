import React from 'react';
import {Text, View, Button, Pressable, TextInput} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {styles} from './styles';
import {Input, SeparationComponent} from '../../../components';

export const SignInScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* top */}
      <View style={styles.top}>
        <View style={styles.titleContainer}>
          <Ionicons name={'pizza-outline'} size={32} color={'#000'} />
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
              marginBottom: 20,
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
              marginTop: 20
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
      


    </View>
  );
};
