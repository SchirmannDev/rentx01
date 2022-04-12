import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {
  Home,

  MyCars,

} from '../screens';
import Routes from './app.routes';

type RouteTypesProps = {
  Home: any;

  MyCars: any;

};

const { Navigator, Screen } = createBottomTabNavigator<RouteTypesProps>();

const Tab = () => {
  return (
    <Navigator initialRouteName="Home">

      <Screen
        options={{ headerShown: false }}
        name='Home'
        component={Routes}
      />



      <Screen
        options={{ headerShown: false }}
        name="MyCars"
        component={MyCars}
      />

    </Navigator>
  );
};

export default Tab;
export type { RouteTypesProps };
