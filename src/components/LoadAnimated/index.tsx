import React from 'react';

import LottieView from 'lottie-react-native';

import * as S from './styles';

import loadingCar from '../../assets/loadingCar.json';



const LoadAnimated = () => {
  return (
    <S.Container>
      <LottieView
        source={loadingCar}
        resizeMode="contain"
        style={{ height: 200 }}
        autoPlay
        loop

      />
    </S.Container>
  )
}

export default LoadAnimated;
