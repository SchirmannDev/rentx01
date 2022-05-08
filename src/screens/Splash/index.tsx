import React, { useEffect } from 'react';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';


import * as S from './styles';

import { SplashAnimated } from '../../components';
import { RouteTypesProps } from '../../routes/app.routes';



const Splash = () => {
  type RouteType = NativeStackNavigationProp<RouteTypesProps, 'Home'>;

  const { navigate } = useNavigation<RouteType>();


  useEffect(() => {
    setTimeout(() => {
      navigate('Home')
    }, 4000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <S.Container>
      <SplashAnimated />
    </S.Container>
  )
}

export default Splash;
