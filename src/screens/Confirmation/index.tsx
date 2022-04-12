import React, { useState } from 'react';
import { useWindowDimensions, StatusBar } from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import * as S from './styles';

import { Done, LogoB } from '../../assets';
import { ConfirmButton } from '../../components';
import { RouteTypesProps } from '../../routes/app.routes';

interface Params {
  title: string;
  message: string;
  nextScreen: string;
}

const Confirmation = () => {
  const { width } = useWindowDimensions();

  const route = useRoute();
  type RouteType = NativeStackNavigationProp<RouteTypesProps, 'SignIn'>;

  const { navigate } = useNavigation<RouteType>();
  const { title, message, nextScreen } = route.params as Params;

  function handleConfirm() {
    navigate('SignIn');
  }

  return (
    <S.Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <LogoB width={width} />

      <S.Content>
        <Done width={80} height={80} />
        <S.Title>{title}</S.Title>
        <S.Message>{message}</S.Message>
      </S.Content>

      <S.Footer>
        <ConfirmButton title="OK" onPress={handleConfirm} />
      </S.Footer>
    </S.Container>
  );
};

export default Confirmation;
