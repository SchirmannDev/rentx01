import { TextInput } from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

interface Props {
  isFocused: boolean;
}

export const Container = styled.View`
  flex-direction: row;
  margin-bottom: ${RFValue(8)}px;
`;

export const InputContainer = styled.View<Props>`
  height: 56px;
  width: 55px;
  margin-right: 2px;
  border-radius: 5px;

  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.secondary};

  ${({ isFocused, theme }) =>
    isFocused &&
    css`
      border-bottom-width: 2px;
      border-bottom-color: ${theme.colors.main};
    `}
`;

export const InputText = styled(TextInput)<Props>`
  border-radius: 5px;
  flex: 1;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.secondary};
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};

  padding: 0 23px;

  ${({ isFocused, theme }) =>
    isFocused &&
    css`
      border-bottom-width: 2px;
      border-bottom-color: ${theme.colors.main};
    `}
`;
