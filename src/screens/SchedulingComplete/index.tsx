import React, { useState } from 'react';
import { useWindowDimensions, StatusBar } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import * as S from './styles';

import { Done, LogoB } from '../../assets';
import { ConfirmButton } from '../../components';
import { RouteTypesProps } from '../../routes/app.routes';

const SchedulingComplete = () => {
  const { width } = useWindowDimensions();


  type RouteType = NativeStackNavigationProp<RouteTypesProps, 'Home'>;

  const { navigate } = useNavigation<RouteType>();

  function handleConfirm() {
    navigate('Home');
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
        <S.Title>Carro Alugado!</S.Title>
        <S.Message>
          Agora você só precisa ir {'\n'}
          até uma concessionária da RENTX {'\n'}
          pegar seu automóvel.
        </S.Message>
      </S.Content>


      <S.Footer>
        <ConfirmButton title="OK" onPress={() => handleConfirm()} />
      </S.Footer>

    </S.Container>
  );
};

export default SchedulingComplete;
