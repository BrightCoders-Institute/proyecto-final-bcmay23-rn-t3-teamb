/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const MainStack = createBottomTabNavigator();
const LoginStack = createNativeStackNavigator();

function LoginLayout() {
  return (
    <LoginStack.Navigator>
      {/* <LoginStack.Screen name="Main" component={LoginHomeScreen} /> */}
      {/* <LoginStack.Screen name="SignIn" component={SignInScreen} /> */}
      {/* <LoginStack.Screen name="SignUp" component={SignUpScreen} /> */}
    </LoginStack.Navigator>
  )
}

function MainLayout() {
  return (
    <MainStack.Navigator>
      {/* <MainStack.Screen name="Home" component={HomeScreen} /> */}
      {/* <MainStack.Screen name="Settings" component={SettingsScreen} /> */}
    </MainStack.Navigator>
  );
}

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <MainStack.Navigator>
        {/* <MainStack.Screen name='test' component={test}/> */}
        <MainStack.Screen name='Main' component={MainLayout} options={{headerShown: false}}/>
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
