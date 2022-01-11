import React from 'react';


import * as S from './styles';

import { Gasoline } from '../../assets';

interface CarData {

  brand: string;
  name: string;
  rent: {
    period: string;
    price: number
  },
  thumbnail: string;

}

interface Props {
  data: CarData;
}


const CardCar = ({ data }: Props) => {
  return (
    <S.Container>
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
  )
}


export default CardCar;
