import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginLayout, MainLayout } from './src/navigation';

const Stack = createNativeStackNavigator();

function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {
          //true /* Replace using Firebase, only if the user was log their session */
          //? <Stack.Screen name='Login' component={LoginLayout} options={{headerShown: false}}/> 
          //: <Stack.Screen name='Main' component={MainLayout} options={{headerShown: false}}/>
          <Stack.Screen name='Main' component={MainLayout} options={{headerShown: false}}/>
        }
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
