import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import * as S from './styles';

import { Gasoline } from '../../assets';
import { carDTO } from '../../dtos/carDTO';

interface Props extends TouchableOpacityProps {
  data: carDTO;
}

const CardCar = ({ data, ...rest }: Props) => {
  return (
    <S.Container {...rest}>
      <S.Details>
        <S.Brand>{data.name}</S.Brand>
        <S.Name>{data.name}</S.Name>

        <S.About>
          <S.Rent>
            <S.Period>{data.rent.period}</S.Period>
            <S.Price>{`R$ ${data.rent.price}`}</S.Price>
          </S.Rent>
          <S.Type>
            <Gasoline />
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
