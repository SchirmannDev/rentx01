import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Feather from 'react-native-vector-icons/Feather';
import { useTheme } from 'styled-components';

import * as S from './styles';

import { BackButton, Bullet, Button, InputPassword } from '../../components';
import { RouteTypesProps } from '../../routes/app.routes';
import api from '../../services/api';





interface Params {
  user: {
    name: string;
    email: string;
    driveLicense: string;
  };
}

const SignUpSecond = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const theme = useTheme();
  const navigation = useNavigation();
  const route = useRoute();
  type RouteType = NativeStackNavigationProp<RouteTypesProps, ''>;

  const { user } = route.params as Params;

  const { navigate } = useNavigation<RouteType>();
  function handleBack() {
    navigation.goBack();
  }

  // eslint-disable-next-line consistent-return
  async function handleSignUp() {
    if (!password || !confirmPassword) {
      return Alert.alert('Erro', 'Preencha todos os campos');
    }
    if (password !== confirmPassword) {
      return Alert.alert('Erro', 'As senhas não conferem');
    }

    await api.post('/users', {
      name: user.name,
      email: user.email,
      driver_license: user.driveLicense,
      password,

    })
      .then(() => {
        navigate('Confirmation', {
          nextScreen: 'SignIn',
          title: 'Conta criada!',
          message: `Agora é só fazer login\ne aproveitar.`,
        });
      })
      .catch((error) => {
        console.log(error)
        Alert.alert('Erro', 'Erro ao criar conta');
      })


  }

  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <S.Container>
          <S.Header>
            <BackButton onPress={() => handleBack()} />
            <S.Steps>
              <Bullet active />
              <Bullet />
            </S.Steps>
          </S.Header>

          <S.Title>Crie sua {'\n'} conta</S.Title>
          <S.Subtitle>
            Faça seu cadastro de {'\n'}
            forma rapida e fácil
          </S.Subtitle>

          <S.Form>
            <S.FormTitle>2. SENHA</S.FormTitle>


            <InputPassword
              iconName="lock"
              placeholder="Senha"
              value={password}
              onChangeText={setPassword}
            />


            <InputPassword
              iconName="lock"
              placeholder="Confirmar senha"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
          </S.Form>

          <Button
            color={theme.colors.success}
            title="Confirmar"
            onPress={handleSignUp}
          />
        </S.Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default SignUpSecond;
