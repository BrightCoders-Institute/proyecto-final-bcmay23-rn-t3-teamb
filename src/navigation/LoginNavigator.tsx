import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainScreen, SignInScreen, SignUpScreen } from '../screens/Login';

const LoginStack = createNativeStackNavigator();

export function LoginLayout() {
    return (
      <LoginStack.Navigator >
        <LoginStack.Screen name="Main" component={MainScreen} options={{headerShown: false}}/>
        <LoginStack.Screen name="SignIn" component={SignInScreen} options={{headerShown: false}}/>
        <LoginStack.Screen name="SignUp" component={SignUpScreen} options={{headerShown: false}}/>
      </LoginStack.Navigator>
    )
  }