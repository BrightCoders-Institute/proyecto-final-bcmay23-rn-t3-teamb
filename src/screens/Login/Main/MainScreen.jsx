import React from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  Pressable
} from 'react-native';
import {styles} from './Styles';

const image = require('../../../images/icon.jpg');

export const MainScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar />
      {/* TOP */}
      <View style={styles.top}>
        <Image source={image} style={styles.icon} />
      </View>

      <View style={styles.containerText}>
        <Text style={styles.title}>
          GASTRO-LAB
        </Text>

        <Text style={styles.subtitle}>
          A platform to cook like a chef
        </Text>

        <View style={styles.containerButtons}>
          <Pressable
            onPress={() => {navigation.navigate('SignUp')}}
            style={({pressed}) => [
              {
                backgroundColor: pressed ? '#ffd60a': '#003566' ,
              },
              styles.button,
            ]}>
              {({pressed}) => (
                <Text style={[{color: pressed ? '#000814' : '#f2f2f2'},styles.textButton ]}>
                  Register
                </Text>
              )}
          </Pressable>
          <Pressable
            onPress={() => {navigation.navigate('SignIn')}}
            style={({pressed}) => [
              {
                backgroundColor: pressed ? '#003566' : '#ffd60a',
              },
              styles.button,
            ]}>
              {({pressed}) => (
                <Text style={[{color: pressed ? '#f2f2f2' : '#000814'},styles.textButton ]}>
                  Sign In
                </Text>
              )}
          </Pressable>
        </View>
      </View>
    </View>
  );
};

