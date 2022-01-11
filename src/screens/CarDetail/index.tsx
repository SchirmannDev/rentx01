import React from 'react';

import * as S from './styles';

import { BackButton } from '../../components';




const CarDetail = () => {
  return (
    <S.Container>
      <S.Header>
        <BackButton onPress={() => console.log('oi')} />
      </S.Header>
    </S.Container>
  )
}


export default CarDetail;
