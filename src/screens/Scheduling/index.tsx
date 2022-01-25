import React, { useState } from 'react';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { format } from 'date-fns';
import { useTheme } from 'styled-components';

import * as S from './styles';

import { Arrow } from '../../assets';
import { BackButton, Button, Calendary } from '../../components';
import { MarkedDatesProps } from '../../components/Calendary ';
import { DayProps } from '../../components/Calendary ';
import { generateInterval } from '../../components/Calendary /generateInterval';
import { RouteTypesProps } from '../../routes/app.routes';
import { getPlatformDate } from '../../utils/getPlatformDate';

interface RentalPeriod {
  start: number;
  startFormatted: string;
  end: number;
  endFormatted: string;
}

const Scheduling = () => {
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
    navigate('SchedulingDetails');
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
      start: start.timestamp,
      end: end.timestamp,
      startFormatted: format(
        getPlatformDate(new Date(firstDate)),
        'dd/MM/yyyy',
      ),
      endFormatted: format(getPlatformDate(new Date(endDate)), 'dd/MM/yyyy'),
    });
  }

  return (
    <S.Container>
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
          onDayPress={() => handleChangeDate}
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
