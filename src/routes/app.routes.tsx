import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  Home,
  CarDetail,
  Scheduling,
  SchedulingDetails,
  SchedulingComplete,
  MyCars,
} from '../screens';

type RouteTypesProps = {
  Home: any;
  Scheduling: any;
  SchedulingDetails: any;
  SchedulingComplete: any;
  CardDetail: any;
  MyCars: any;
};

const { Navigator, Screen } = createNativeStackNavigator<RouteTypesProps>();

const Routes = () => {
  return (
    <Navigator initialRouteName="Home">
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

      <Screen
        options={{ headerShown: false }}
        name="MyCars"
        component={MyCars}
      />
    </Navigator>
  );
};

export default Routes;
export type { RouteTypesProps };
