import React from 'react';
import { useWindowDimensions } from 'react-native';

import * as S from './styles';

import { Done, LogoB } from '../../assets';
import { ConfirmButton } from '../../components';

const SchedulingComplete = () => {
  const { width } = useWindowDimensions();
  return (
    <S.Container>
      <LogoB width={width} />

      <S.Content>
        <Done width={80} height={80} />

        <S.Title>Carro Alugado!</S.Title>
        <S.Message>
          Agora você só precisa ir {'\n'}
          até uma concessionária da RENTX {'\n'}
          pegar seu automóvel.
        </S.Message>
      </S.Content>
      <S.Footer>
        <ConfirmButton title="OK" />
      </S.Footer>
    </S.Container>
  );
};

export default SchedulingComplete;
