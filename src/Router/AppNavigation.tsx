import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Screen} from '../Helpers';
import AuthRouter from './AuthRouter';
import BottomNavigation from './BottomNavigation';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {storage} from '@/Theme/StorageMMKV';
import Constants from '@/Theme/Constants';

const Stack = createNativeStackNavigator();

export default () => {
  const token = storage.getString(Constants.StorageKeys.token);
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName={token ? Screen.Main : Screen.Auth}>
          <Stack.Screen name={Screen.Auth} component={AuthRouter} />
          <Stack.Screen name={Screen.Main} component={BottomNavigation} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
