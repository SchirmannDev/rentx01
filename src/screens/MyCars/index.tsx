import React, { useEffect, useState } from 'react';
import { StatusBar, FlatList } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useTheme } from 'styled-components';

import * as S from './styles';

import BackButton from '../../components/BackButton';
import CardCar from '../../components/CardCar';
import Load from '../../components/Load';
import { carDTO } from '../../dtos/carDTO';
import api from '../../services/api';


interface CarProps {
  id: string;
  user_id: string;
  car: carDTO;
  startDate: string;
  endDate: string;

}


const MyCars = () => {
  const [cars, setCars] = useState<CarProps[]>([]);
  const [loading, setLoading] = useState(true);
  const theme = useTheme();
  const navigate = useNavigation();


  function handleBack() {
    navigate.goBack()
  }


  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await api.get('/schedules_byuser?user_id=1');
        setCars(response.data);
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }
    fetchCars()
  }, [])

  return (
    <S.Container>
      <StatusBar barStyle="light-content" />
      <S.Header>

        <BackButton onPress={() => handleBack()} color={theme.colors.shape} />
        <S.Title>
          Seus agendamentos, {'\n'}
          estão aqui.
        </S.Title>
        <S.SubTitle>
          Conforto, segurança e praticidade
        </S.SubTitle>

      </S.Header>
      {loading ? <Load /> : (
        <S.Content>
          <S.Appointments>
            <S.AppointmentsTitle>Agendamentos feitos</S.AppointmentsTitle>
            <S.AppointmentsQuantity>{cars.length}</S.AppointmentsQuantity>
          </S.Appointments>

          <FlatList
            data={cars}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <S.CarWrapper>
                <CardCar data={item.car} />

                <S.CarFooter>
                  <S.CarFooterTitle>Periodo</S.CarFooterTitle>
                  <S.CarFooterPeriod>
                    <S.CarFooterDate>{item.startDate}</S.CarFooterDate>
                    <AntDesign
                      name="arrowright"
                      size={20}
                      color={theme.colors.title}
                      style={{ marginHorizontal: 11 }}
                    />
                    <S.CarFooterDate>{item.endDate}</S.CarFooterDate>
                  </S.CarFooterPeriod>
                </S.CarFooter>
              </S.CarWrapper>
            )}
          />
        </S.Content>
      )}
    </S.Container>
  )
}


export default MyCars;
