import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import Splash from '../Screens/Splash';
import UserName from '../Screens/UserName';
import Home from '../Screens/BottomTabs/Home';
import Search from '../Screens/BottomTabs/Search';

const Routes = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createMaterialBottomTabNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="UserName"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="UserName" component={UserName} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
