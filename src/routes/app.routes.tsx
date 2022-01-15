import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  Home,
  CarDetail,
  Scheduling,
  SchedulingDetails,
  SchedulingComplete,
} from '../screens';

const { Navigator, Screen } = createNativeStackNavigator();

const Routes = () => {
  return (
    <Navigator initialRouteName="SchedulingComplete">
      <Screen options={{ headerShown: false }} name="Home" component={Home} />
      <Screen
        options={{ headerShown: false }}
        name="CardDetail"
        component={CarDetail}
      />
      <Screen
        options={{ headerShown: false }}
        name="Scheduling"
        component={Scheduling}
      />
      <Screen
        options={{ headerShown: false }}
        name="SchedulingDetails"
        component={SchedulingDetails}
      />
      <Screen
        options={{ headerShown: false }}
        name="SchedulingComplete"
        component={SchedulingComplete}
      />
    </Navigator>
  );
};

export default Routes;
