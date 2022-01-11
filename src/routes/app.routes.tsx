import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home, CarDetail } from '../screens';

const { Navigator, Screen } = createNativeStackNavigator();

const Routes = () => {
  return (
    <Navigator initialRouteName="Home">
      <Screen options={{ headerShown: true }} name="Home" component={Home} />
      <Screen options={{ headerShown: true }} name="CardDetail" component={CarDetail} />
    </Navigator>
  );
};

export default Routes;
