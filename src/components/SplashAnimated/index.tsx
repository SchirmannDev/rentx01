import React from 'react';

import LottieView from 'lottie-react-native';

import * as S from './styles';

import load_animated from '../../assets/load_animated.json';


const SplashAnimated = () => {
  return (
    <S.Container>
      <LottieView
        source={load_animated}
        resizeMode="contain"
        style={{ height: 200 }}
        autoPlay
        loop
      />
    </S.Container>
  )
}

export default SplashAnimated;
