import React, {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginLayout, MainLayout } from './src/navigation';
import User, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import { ReactNativeFirebase } from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';

const Stack = createNativeStackNavigator();

function App(){
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  useEffect(() => {
    auth().onAuthStateChanged((user) => {
      setUser(user);
    });
  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {
          user /* Replace using Firebase, only if the user was log their session */
          ? <Stack.Screen name='Main' component={MainLayout} options={{headerShown: false}}/>
          : <Stack.Screen name='Login' component={LoginLayout} options={{headerShown: false}}/> 
        }
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
