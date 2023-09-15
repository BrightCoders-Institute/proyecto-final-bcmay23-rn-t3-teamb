import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AddRecipe, SearchScreen } from '../screens/Main';
import { HomeScreen } from '../screens/Home/HomeScreen';
import { FavoriteScreen } from '../screens/Favorite/FavoriteScreen';
import { ProfileScreen } from '../screens/Profile/ProfileScreen';
import { RecipeFormScreen } from '../screens/RecipeForm/RecipeFormScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useRoute } from '@react-navigation/native';

const MainStack = createBottomTabNavigator();

const icons = {
  'Search': {default: 'search-outline', focus: 'search'},
  'Add': {default: 'add-circle-outline', focus: 'add-circle'},
  'Favorites': {default: 'heart-outline', focus: 'heart'},
  'Home': {default: 'home-outline', focus: 'home'},
  'Profile': {default: 'person-outline', focus: 'person'},
}

export function MainLayout() {
  return (
    <MainStack.Navigator initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let routName = route.name as keyof typeof icons;
          let iconName: string = focused 
            ? icons[routName].focus 
            : icons[routName].default;


          return <Ionicons name={iconName} size={24} color={color} />;
        },
        tabBarActiveTintColor: '#003566',
        tabBarInactiveTintColor: '#000814',
      })}
    >
      <MainStack.Screen name="Search" component={SearchScreen} options={{headerShown: false}} />
      <MainStack.Screen name="Add" component={RecipeFormScreen} options={{headerShown: false}} />
      <MainStack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
      <MainStack.Screen name="Favorites" component={FavoriteScreen} options={{headerShown: false}} />
      <MainStack.Screen name="Profile" component={ProfileScreen} options={{headerShown: false}}/>
    </MainStack.Navigator>
  );
}