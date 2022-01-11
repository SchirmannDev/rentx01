import { Dimensions } from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

const { width, height } = Dimensions.get('window');

export const Container = styled.View`
  width: 100%;
  height: 126px;
  background-color: ${({ theme }) => theme.colors.secondary};
  flex-direction: row;
  justify-content: space-between;
  padding: 24px;
  margin-bottom: 16px;
`;

export const Details = styled.View``;
export const Brand = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.text_detail};
  font-size: ${RFValue(12)}px;
  text-transform: uppercase;
`;
export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.title};
  font-size: ${RFValue(15)}px;
`;
export const About = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 16px;
`;
export const Rent = styled.View`
  margin-right: 24px;
`;
export const Period = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.text_detail};
  font-size: ${RFValue(12)}px;
  text-transform: uppercase;
`;
export const Price = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.main};
  font-size: ${RFValue(15)}px;
`;
export const Type = styled.View``;

export const ContainerCar = styled.View`
  width: ${width * 0.5}px;
  height: ${height * 0.15}px;
`;
export const CarImage = styled.Image`
  width: 100%;
  height: 100%;
`;
