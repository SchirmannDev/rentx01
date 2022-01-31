import React from 'react';

import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import * as S from './styles';

import { BackButton, ImageSlider, Acessory, Button } from '../../components';
import { carDTO } from '../../dtos/carDTO';
import { RouteTypesProps } from '../../routes/app.routes';
import { getAccessoryIcon } from '../../utils/getAccessory';

interface Params {
  car: carDTO;
}

const CarDetail = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { car } = route.params as Params;
  type RouteType = NativeStackNavigationProp<RouteTypesProps, 'Scheduling'>;

  const { navigate } = useNavigation<RouteType>();

  function handleConfirmRental() {
    navigate('Scheduling', {
      car
    });
  }

  function handleBack() {
    navigation.goBack();
  }
  return (
    <S.Container>
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
            <S.Price>R$ {car.rent.price},00</S.Price>
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

        <S.About>{car.about}</S.About>
      </S.Content>
      <S.Footer>
        <Button
          title="Escolher periodo do aluguel"
          color=""
          onPress={() => handleConfirmRental()}
        />
      </S.Footer>
    </S.Container>
  );
};

export default CarDetail;
