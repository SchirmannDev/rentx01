import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screens';

const { Navigator, Screen } = createNativeStackNavigator();

const Routes = () => {
  return (
    <Navigator initialRouteName="Home">
      <Screen options={{ headerShown: true }} name="Home" component={Home} />
    </Navigator>
  );
};

export default Routes;
