import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  Confirmation,
  Splash,
  SignIn,
  SignUp,
  SignUpSecond
} from '../screens';

type RouteTypesProps = {

  Confirmation: any;
  Splash: any;
  SignIn: any;
  SignUp: any;
  SignUpSecond: any;
};

const { Navigator, Screen } = createNativeStackNavigator<RouteTypesProps>();

const Auth = () => {
  return (
    <Navigator initialRouteName="Splash">

      <Screen
        options={{ headerShown: false }}
        name="Splash"
        component={Splash}
      />

      <Screen
        options={{ headerShown: false }}
        name="SignIn"
        component={SignIn}
      />


      <Screen
        options={{ headerShown: false }}
        name='SignUp'
        component={SignUp}
      />

      <Screen
        options={{ headerShown: false }}
        name='SignUpSecond'
        component={SignUpSecond}
      />


      <Screen
        options={{ headerShown: false }}
        name="Confirmation"
        component={Confirmation}
      />

    </Navigator>
  );
};

export default Auth;
export type { RouteTypesProps };
