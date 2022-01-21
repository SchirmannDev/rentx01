import React from 'react';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

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

const CarDetail = () => {
  const navigation = useNavigation();
  type RouteType = NativeStackNavigationProp<RouteTypesProps, 'Scheduling'>;

  const { navigate } = useNavigation<RouteType>();

  function handleConfirmRental() {
    navigate('Scheduling');
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
        <ImageSlider
          imagesUrl={[
            'https://freepngimg.com/thumb/audi/35227-5-audi-rs5-red.png',
          ]}
        />
      </S.CarImages>
      <S.Content>
        <S.Details>
          <S.Description>
            <S.Brand>AUDI</S.Brand>
            <S.Name>RS 5 Coupé</S.Name>
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

        <S.About>
          Este é um automóvel desportivo. Surgiu o lendário touro de lide
          induldado na praça Real Maestranza de Sevilla. É um bélissimo carro
          para quem gosta de acelerar.
        </S.About>
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
