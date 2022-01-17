import React from 'react';
import { StatusBar } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RFValue } from 'react-native-responsive-fontsize';

import * as S from './styles';

import { Logo } from '../../assets';
import { CardCar } from '../../components';
import { RouteTypesProps } from '../../routes/app.routes';

const Home = () => {
  type RouteType = NativeStackNavigationProp<RouteTypesProps, 'CardDetail'>;

  const { navigate } = useNavigation<RouteType>();

  const carData = {
    brand: 'AUDI',
    name: 'RS 5 Coupé',
    rent: {
      period: 'AO DIA',
      price: 120,
    },
    thumbnail: 'https://freepngimg.com/thumb/audi/35227-5-audi-rs5-red.png',
  };

  function handleCarDetails() {
    navigate('CardDetail');
  }

  return (
    <S.Container>
      <StatusBar barStyle="light-content" />
      <S.Header>
        <S.HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          <S.TotalCars>Total de 12 carros</S.TotalCars>
        </S.HeaderContent>
      </S.Header>

      <S.CarList
        data={[1, 2, 3]}
        keyExtractor={item => String(item)}
        renderItem={({ item }) => (
          <CardCar data={carData} onPress={() => handleCarDetails()} />
        )}
      />
    </S.Container>
  );
};

export default Home;
