import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AddRecipe, FavoritesScreen, SearchScreen } from '../screens/Main';
import { HomeScreen } from '../screens/Home/HomeScreen';
import { FavoriteScreen } from '../screens/Favorite/FavoriteScreen';
import { ProfileScreen } from '../screens/Profile/ProfileScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

const MainStack = createBottomTabNavigator();

export function MainLayout() {
  return (
    <MainStack.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Search') {
            iconName = focused ? 'search' : 'search-outline';
          } else if (route.name === 'Add') {
            iconName = focused ? 'add-circle' : 'add-circle-outline';
          } else if (route.name === 'Favorites') {
            iconName = focused ? 'heart' : 'heart-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          } else if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={24} color={color} />;
        },
        tabBarActiveTintColor: '#003566',
        tabBarInactiveTintColor: '#000814',
      })}
    >
      <MainStack.Screen name="Search" component={SearchScreen} options={{headerShown: false}} />
      <MainStack.Screen name="Add" component={AddRecipe} options={{headerShown: false}} />
      <MainStack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
      <MainStack.Screen name="Favorites" component={FavoriteScreen} options={{headerShown: false}} />
      <MainStack.Screen name="Profile" component={ProfileScreen} options={{headerShown: false}}/>
    </MainStack.Navigator>
  );
}