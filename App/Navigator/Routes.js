import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../Screens/Splash';
import UserName from '../Screens/UserName';

const Routes = () => {
  const Stack = createNativeStackNavigator();
  // const Tab =
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
