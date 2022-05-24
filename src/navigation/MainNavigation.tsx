import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Categories, CategoryDetails} from '../screens'
const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
      <Stack.Navigator
        // screenOptions={{headerShown: false}}
        initialRouteName="MainNavigation" >
        <Stack.Screen name="Categories" component={Categories} /> 
        <Stack.Screen name="CategoryDetails" component={CategoryDetails} /> 
      </Stack.Navigator>
  );
};

export default MainNavigation;