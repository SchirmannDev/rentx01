import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { StatusBar } from 'react-native';

import * as S from './styles';

import { carDTO } from '../../dtos/carDTO';
import { getAccessoryIcon } from '../../utils/getAccessory';

interface Props extends TouchableOpacityProps {
  data: carDTO;
}

const CardCar = ({ data, ...rest }: Props) => {
  const MotorIcon = getAccessoryIcon(data.fuel_type);
  return (
    <S.Container {...rest}>
      <StatusBar barStyle="light-content" />
      <S.Details>
        <S.Brand>{data.name}</S.Brand>
        <S.Name>{data.name}</S.Name>

        <S.About>
          <S.Rent>
            <S.Period>{data.period}</S.Period>
            <S.Price>{`R$ ${data.price}`}</S.Price>
          </S.Rent>
          <S.Type>
            <MotorIcon />
          </S.Type>
        </S.About>
      </S.Details>
      <S.ContainerCar>
        <S.CarImage source={{ uri: data.thumbnail }} />
      </S.ContainerCar>
    </S.Container>
  );
};

export default CardCar;
