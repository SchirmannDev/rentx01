import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home, CarDetail, Scheduling, SchedulingDetails } from '../screens';

const { Navigator, Screen } = createNativeStackNavigator();

const Routes = () => {
  return (
    <Navigator initialRouteName="SchedulingDetails">
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
    </Navigator>
  );
};

export default Routes;
