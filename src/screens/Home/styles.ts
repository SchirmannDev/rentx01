import { FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

import { carDTO } from '../../dtos/carDTO';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Header = styled.View`
  width: 100%;
  height: 113px;
  background-color: ${({ theme }) => theme.colors.header};
  justify-content: flex-end;
  padding: 32px 24px;
`;

export const HeaderContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

export const TotalCars = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.text};
`;

export const CarList = styled(FlatList as new () => FlatList<carDTO>).attrs({
  contentContainerStyle: {
    padding: 24,
  },
  showVerticalScrollIndicator: false,
})``;

export const MyCarsButton = styled(TouchableOpacity)`
  width: 60px;
  height: 60px;

  background-color: ${({ theme }) => theme.colors.main};
  border-radius: 30px;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  right: 0;
`;
