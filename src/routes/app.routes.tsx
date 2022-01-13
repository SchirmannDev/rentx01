import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home, CarDetail, Scheduling } from '../screens';

const { Navigator, Screen } = createNativeStackNavigator();

const Routes = () => {
  return (
    <Navigator initialRouteName="Scheduling">
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
    </Navigator>
  );
};

export default Routes;
