import React from 'react';

import * as S from './styles';

interface Props {
  active?: boolean;
}

const Bullet = ({ active = false }: Props) => {
  return <S.Container active={active} />;
};

export default Bullet;
