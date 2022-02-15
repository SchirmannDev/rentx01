import React, { useState } from 'react';
import { Alert, StatusBar } from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { format } from 'date-fns';
import { useTheme } from 'styled-components';

import * as S from './styles';

import { Arrow } from '../../assets';
import { BackButton, Button, Calendary } from '../../components';
import { MarkedDatesProps } from '../../components/Calendary ';
import { DayProps } from '../../components/Calendary ';
import { generateInterval } from '../../components/Calendary /generateInterval';
import { carDTO } from '../../dtos/carDTO';
import { RouteTypesProps } from '../../routes/app.routes';
import { getPlatformDate } from '../../utils/getPlatformDate';

interface RentalPeriod {
  startFormatted: string;

  endFormatted: string;
}

interface Params {
  car: carDTO;
}

const Scheduling = () => {
  const route = useRoute();
  const { car } = route.params as Params;
  const [lastSelectedDate, setLastSelectedDate] = useState<DayProps>(
    {} as DayProps,
  );
  const [markedDates, setMarkedDates] = useState<MarkedDatesProps>(
    {} as MarkedDatesProps,
  );

  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>(
    {} as RentalPeriod,
  );

  const theme = useTheme();
  const navigation = useNavigation();

  type RouteType = NativeStackNavigationProp<
    RouteTypesProps,
    'SchedulingDetails'
  >;

  const { navigate } = useNavigation<RouteType>();

  function handleConfirmRental() {
    if (!rentalPeriod.startFormatted || !rentalPeriod.endFormatted) {
      Alert.alert('Selecione o intervalo para alugar.');
    } else {
      navigate('SchedulingDetails', {
        car,
        dates: Object.keys(markedDates),
      });
    }
  }

  function handleBack() {
    navigation.goBack();
  }

  function handleChangeDate(date: DayProps) {
    let start = !lastSelectedDate.timestamp ? date : lastSelectedDate;
    let end = date;

    if (start.timestamp > end.timestamp) {
      start = end;
      end = start;
    }
    setLastSelectedDate(end);
    const interval = generateInterval(start, end);
    setMarkedDates(interval);

    const firstDate = Object.keys(interval)[0];
    const endDate = Object.keys(interval)[Object.keys(interval).length - 1];

    setRentalPeriod({
      startFormatted: format(
        getPlatformDate(new Date(firstDate)),
        'dd/MM/yyyy',
      ),
      endFormatted: format(getPlatformDate(new Date(endDate)), 'dd/MM/yyyy'),
    });
  }

  return (
    <S.Container>
      <StatusBar barStyle="light-content" />
      <S.Header>
        <BackButton onPress={() => handleBack()} color={theme.colors.shape} />
        <S.Title>
          Escolha uma {'\n'}
          data de inicio {'\n'}e fim do aluguel:
        </S.Title>

        <S.RentalPeriod>
          <S.DateInfo>
            <S.DateTitle>DE</S.DateTitle>
            <S.DateValue selected={!!rentalPeriod.startFormatted}>
              {rentalPeriod.startFormatted}
            </S.DateValue>
          </S.DateInfo>
          <Arrow />

          <S.DateInfo>
            <S.DateTitle>ATÉ</S.DateTitle>
            <S.DateValue selected={!!rentalPeriod.endFormatted}>
              {rentalPeriod.endFormatted}
            </S.DateValue>
          </S.DateInfo>
        </S.RentalPeriod>
      </S.Header>

      <S.Content>
        <Calendary
          markedDates={markedDates}
          onDayPress={handleChangeDate()}
          enabled={!!rentalPeriod.startFormatted}
          loading
        />
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
