import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Screen} from '../Helpers';
import React from 'react';
import {LoginScreen} from '../Screens';

const Stack = createNativeStackNavigator();
export default () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={Screen.LoginScreen} component={LoginScreen} />
    </Stack.Navigator>
  );
};
