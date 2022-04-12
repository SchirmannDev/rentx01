import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RFValue } from 'react-native-responsive-fontsize';


import * as S from './styles';

import { Logo } from '../../assets';
import { CardCar, LoadAnimated } from '../../components';
import { carDTO } from '../../dtos/carDTO';
import { RouteTypesProps } from '../../routes/app.routes';
import api from '../../services/api';

const Home = () => {
  const [cars, setCars] = useState<carDTO[]>([]);
  const [loading, setLoading] = useState(true);

  type RouteType = NativeStackNavigationProp<RouteTypesProps, 'CardDetail'>;

  const { navigate } = useNavigation<RouteType>();

  function handleCarDetails(car: carDTO) {
    navigate('CardDetail', { car });
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
          <S.TotalCars>Total de {cars.length} carros</S.TotalCars>
        </S.HeaderContent>
      </S.Header>
      {loading ? (
        <LoadAnimated />
      ) : (
        <S.CarList
          data={cars}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <CardCar data={item} onPress={() => handleCarDetails(item)} />
          )}
        />
      )}

    </S.Container>
  );
};

export default Home;
