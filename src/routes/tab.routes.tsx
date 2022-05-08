import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from 'styled-components';



import { HomeIcon, Car, People } from '../assets';
import {
  Home,
  MyCars
} from '../screens';
import Routes from './app.routes';

;


type RouteTypesProps = {
  Home: any;
  Profile: any;
  MyCars: any;

};

const { Navigator, Screen } = createBottomTabNavigator<RouteTypesProps>();

const Tab = () => {
  const theme = useTheme();
  return (
    <Navigator
      tabBarOptions={{
        activeTintColor: theme.colors.main,
        inativeTintColor: theme.colors.text_detail,
        showLabel: false,
        style: {
          paddingVertical: 0,
          height: 68,
          backgroundColor: theme.colors.primary,
        }
      }}
      initialRouteName="Home"
    >

      <Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <HomeIcon width={24} height={24} />
          )
        }}
        name='Home'
        component={Routes}
      />

      <Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <People width={24} height={24} />
          )
        }}
        name="Profile"
        component={Home}
      />



      <Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Car width={24} height={24} />
          )
        }}
        name="MyCars"
        component={MyCars}
      />

    </Navigator>
  );
};

export default Tab;
export type { RouteTypesProps };
