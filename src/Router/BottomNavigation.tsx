import React from 'react';

import {Screen} from '../Helpers';

import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {
  EventScreen,
  FavoriteScreen,
  ProfileScreen,
  SearchScreen,
} from '@/Screens';
import {AppBottomBar} from '@/Components';

const Tab = createBottomTabNavigator();

export default () => {
  const renderBottom = (props: BottomTabBarProps) => (
    <AppBottomBar {...props} />
  );

  return (
    <Tab.Navigator
      initialRouteName={Screen.EventScreen}
      tabBar={renderBottom}
      screenOptions={{headerShown: false}}>
      <Tab.Screen name={Screen.SearchScreen} component={SearchScreen} />
      <Tab.Screen name={Screen.EventScreen} component={EventScreen} />
      <Tab.Screen name={Screen.FavoriteScreen} component={FavoriteScreen} />
      <Tab.Screen name={Screen.ProfileScreen} component={ProfileScreen} />
    </Tab.Navigator>
  );
};
