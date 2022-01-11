import React from 'react';

import * as S from './styles';

import { BackButton, ImageSlider } from '../../components';

const CarDetail = () => {
  return (
    <S.Container>
      <S.Header>
        <BackButton onPress={() => console.log('oi')} />
      </S.Header>
      <S.CarImages>
        <ImageSlider
          imagesUrl={[
            'https://freepngimg.com/thumb/audi/35227-5-audi-rs5-red.png',
          ]}
        />
      </S.CarImages>
    </S.Container>
  );
};

export default CarDetail;
