import React from 'react';
import { StatusBar } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Feather from 'react-native-vector-icons/Feather';
import { useTheme } from 'styled-components';

import * as S from './styles';

import {
  Speed,
  Acceleration,
  Force,
  Gasoline,
  Exchange,
  People,
} from '../../assets';
import { BackButton, ImageSlider, Acessory, Button } from '../../components';
import { RouteTypesProps } from '../../routes/app.routes';

const SchedulingDetails = () => {
  const theme = useTheme();
  const navigation = useNavigation();

  type RouteType = NativeStackNavigationProp<
    RouteTypesProps,
    'SchedulingComplete'
  >;

  const { navigate } = useNavigation<RouteType>();

  function handleConfirmRental() {
    navigate('SchedulingComplete');
  }

  function handleBack() {
    navigation.goBack();
  }

  return (
    <S.Container>
      <StatusBar barStyle="light-content" />
      <S.Header>
        <BackButton onPress={() => handleBack()} />
      </S.Header>
      <S.CarImages>
        <ImageSlider
          imagesUrl={[
            'https://freepngimg.com/thumb/audi/35227-5-audi-rs5-red.png',
          ]}
        />
      </S.CarImages>
      <S.Content>
        <S.Details>
          <S.Description>
            <S.Brand>Lambhorguini</S.Brand>
            <S.Name>Huracan</S.Name>
          </S.Description>

          <S.Rent>
            <S.Period>Ao dia</S.Period>
            <S.Price>R$580,00</S.Price>
          </S.Rent>
        </S.Details>

        <S.Acessorys>
          <Acessory name="380km/h" icon={Speed} />
          <Acessory name="3.2s" icon={Acceleration} />
          <Acessory name="800 HP" icon={Force} />
          <Acessory name="Gasolina" icon={Gasoline} />
          <Acessory name="Auto" icon={Exchange} />
          <Acessory name="2 pessoas" icon={People} />
        </S.Acessorys>

        <S.RentalPeriod>
          <S.CalendarIcon>
            <Feather name="calendar" size={24} color={theme.colors.shape} />
          </S.CalendarIcon>
          <S.DateInfo>
            <S.DateTitle>DE</S.DateTitle>
            <S.DateValue>18/06/2022 </S.DateValue>
          </S.DateInfo>
          <Feather name="chevron-right" size={10} color={theme.colors.text} />

          <S.DateInfo>
            <S.DateTitle>ATÉ</S.DateTitle>
            <S.DateValue>21/06/2022 </S.DateValue>
          </S.DateInfo>
        </S.RentalPeriod>

        <S.RentalPrice>
          <S.PriceLabel>TOTAL</S.PriceLabel>
          <S.PriceDetails>
            <S.PriceQuota>R$ 580 x3 diárias</S.PriceQuota>
            <S.PriceTotal>R$ 2.900</S.PriceTotal>
          </S.PriceDetails>
        </S.RentalPrice>
      </S.Content>
      <S.Footer>
        <Button
          title="ALUGAR AGORA"
          color={theme.colors.success}
          onPress={() => handleConfirmRental()}
        />
      </S.Footer>
    </S.Container>
  );
};

export default SchedulingDetails;
