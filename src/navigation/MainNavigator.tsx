import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AddRecipe, FavoritesScreen, ProfileScreen, SearchScreen } from '../screens/Main';

const MainStack = createBottomTabNavigator();

export function MainLayout() {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="Search" component={SearchScreen} />
      <MainStack.Screen name="Add" component={AddRecipe} />
      <MainStack.Screen name="Favorites" component={FavoritesScreen} />
      <MainStack.Screen name="Profile" component={ProfileScreen} />
    </MainStack.Navigator>
  );
}