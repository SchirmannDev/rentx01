import React from 'react';
import { StatusBar } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useTheme } from 'styled-components';

import * as S from './styles';

import { Arrow } from '../../assets';
import { BackButton, Button, Calendary } from '../../components';
import { RouteTypesProps } from '../../routes/app.routes';

const Scheduling = () => {
  const theme = useTheme();

  type RouteType = NativeStackNavigationProp<
    RouteTypesProps,
    'SchedulingDetails'
  >;

  const { navigate } = useNavigation<RouteType>();

  function handleConfirmRental() {
    navigate('SchedulingDetails');
  }

  return (
    <S.Container>
      <S.Header>
        <StatusBar
          barStyle="light-content"
          translucent
          backgroundColor="transparent"
        />
        <BackButton
          onPress={() => console.log('oi')}
          color={theme.colors.shape}
        />
        <S.Title>
          Escolha uma {'\n'}
          data de inicio {'\n'}e fim do aluguel:
        </S.Title>

        <S.RentalPeriod>
          <S.DateInfo>
            <S.DateTitle>DE</S.DateTitle>
            <S.DateValue selected={false}>18/06/2020</S.DateValue>
          </S.DateInfo>
          <Arrow />

          <S.DateInfo>
            <S.DateTitle>ATÉ</S.DateTitle>
            <S.DateValue selected={false}>19/07/2021</S.DateValue>
          </S.DateInfo>
        </S.RentalPeriod>
      </S.Header>

      <S.Content>
        <Calendary />
      </S.Content>

      <S.Footer>
        <Button
          title="CONFIRMAR"
          color=""
          onPress={() => handleConfirmRental()}
        />
      </S.Footer>
    </S.Container>
  );
};

export default Scheduling;
