import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RFValue } from 'react-native-responsive-fontsize';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useTheme } from 'styled-components';

import * as S from './styles';

import { Logo } from '../../assets';
import { CardCar, Load } from '../../components';
import { carDTO } from '../../dtos/carDTO';
import { RouteTypesProps } from '../../routes/app.routes';
import api from '../../services/api';

const Home = () => {
  const [cars, setCars] = useState<carDTO[]>([]);
  const [loading, setLoading] = useState(true);
  const theme = useTheme();
  type RouteType = NativeStackNavigationProp<RouteTypesProps, 'CardDetail'>;

  const { navigate } = useNavigation<RouteType>();

  function handleCarDetails(car: carDTO) {
    navigate('CardDetail', { car });
  }

  function handleOpenMyCars() {
    navigate('MyCars');
  }

  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await api.get('/cars');
        setCars(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchCars();
  }, []);

  return (
    <S.Container>
      <StatusBar barStyle="light-content" />
      <S.Header>
        <S.HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          <S.TotalCars>Total de 12 carros</S.TotalCars>
        </S.HeaderContent>
      </S.Header>
      {loading ? (
        <Load />
      ) : (
        <S.CarList
          data={cars}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <CardCar data={item} onPress={() => handleCarDetails(item)} />
          )}
        />
      )}
      <S.MyCarsButton onPress={() => handleOpenMyCars()}>
        <Ionicons name="ios-car-sport" size={32} color={theme.colors.shape} />
      </S.MyCarsButton>

    </S.Container>
  );
};

export default Home;
