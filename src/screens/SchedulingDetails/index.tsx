import React, { useEffect, useState } from 'react';
import { Alert, StatusBar } from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { format } from 'date-fns';
import Feather from 'react-native-vector-icons/Feather';
import { useTheme } from 'styled-components';

import * as S from './styles';

import { BackButton, ImageSlider, Acessory, Button } from '../../components';
import { carDTO } from '../../dtos/carDTO';
import { RouteTypesProps } from '../../routes/app.routes';
import api from '../../services/api';
import { getAccessoryIcon } from '../../utils/getAccessory';
import { getPlatformDate } from '../../utils/getPlatformDate';

interface Params {
  car: carDTO;
  dates: string[];
}

interface RentalPeriod {
  start: string;
  end: string;
}

const SchedulingDetails = () => {
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>(
    {} as RentalPeriod,
  );

  const theme = useTheme();
  const navigation = useNavigation();
  const route = useRoute();
  const { car, dates } = route.params as Params;

  const rentTotal = Number(dates.length * car.rent.price);

  type RouteType = NativeStackNavigationProp<
    RouteTypesProps,
    'SchedulingComplete'
  >;

  const { navigate } = useNavigation<RouteType>();

  async function handleConfirmRental() {
    const schedulesByCar = await api.get(`/schedules_bycars/${car.id}`);

    const unavailable_dates = [
      ...schedulesByCar.data.unavailable_dates,
      ...dates,
    ];

    await api.post('schedules_byuser', {
      user_id: 1,
      car,
      startDate: format(getPlatformDate(new Date(dates[0])), 'dd/MM/yyyy'),
      endDate: format(
        getPlatformDate(new Date(dates[dates.length - 1])),
        'dd/MM/yyyy',
      ),
    });

    api
      .put(`/schedules_bycars/${car.id}`, {
        id: car.id,
        unavailable_dates,
      })
      .then(() => navigate('Confirmation', {
        nextScreen: 'Home',
        title: 'Carro Alugado!',
        message: `Agora é só precisa ir\naté uma concessionaria da RENTX\npegar o seu automóvel.`,
      }))
      .catch(() => Alert.alert('Não foi possivel confirmar o agendamento'));
  }

  function handleBack() {
    navigation.goBack();
  }

  useEffect(() => {
    setRentalPeriod({
      start: format(getPlatformDate(new Date(dates[0])), 'dd/MM/yyyy'),
      end: format(
        getPlatformDate(new Date(dates[dates.length - 1])),
        'dd/MM/yyyy',
      ),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <S.Container>
      <StatusBar barStyle="light-content" />
      <S.Header>
        <BackButton onPress={() => handleBack()} />
      </S.Header>
      <S.CarImages>
        <ImageSlider imagesUrl={car.photos} />
      </S.CarImages>
      <S.Content>
        <S.Details>
          <S.Description>
            <S.Brand>{car.brand}</S.Brand>
            <S.Name>{car.name}</S.Name>
          </S.Description>

          <S.Rent>
            <S.Period>{car.rent.period}</S.Period>
            <S.Price>R${car.rent.price},00</S.Price>
          </S.Rent>
        </S.Details>

        <S.Acessorys>
          {car.accessories.map(accessory => (
            <Acessory
              key={accessory.type}
              name={accessory.name}
              icon={getAccessoryIcon(accessory.type)}
            />
          ))}
        </S.Acessorys>

        <S.RentalPeriod>
          <S.CalendarIcon>
            <Feather name="calendar" size={24} color={theme.colors.shape} />
          </S.CalendarIcon>
          <S.DateInfo>
            <S.DateTitle>DE</S.DateTitle>
            <S.DateValue>{rentalPeriod.start}</S.DateValue>
          </S.DateInfo>
          <Feather name="chevron-right" size={10} color={theme.colors.text} />

          <S.DateInfo>
            <S.DateTitle>ATÉ</S.DateTitle>
            <S.DateValue>{rentalPeriod.end}</S.DateValue>
          </S.DateInfo>
        </S.RentalPeriod>

        <S.RentalPrice>
          <S.PriceLabel>TOTAL</S.PriceLabel>
          <S.PriceDetails>
            <S.PriceQuota>{`R$ ${car.rent.price} x${dates.length} diárias`}</S.PriceQuota>
            <S.PriceTotal>R${rentTotal}</S.PriceTotal>
          </S.PriceDetails>
        </S.RentalPrice>
      </S.Content>
      <S.Footer>
        <Button
          title="ALUGAR AGORA"
          color={theme.colors.success}
          onPress={handleConfirmRental}
        />
      </S.Footer>
    </S.Container>
  );
};

export default SchedulingDetails;
