import React, { useState } from "react";
import { StatusBar, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Alert } from "react-native";

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import * as Yup from 'yup';



import theme from '../../styles/theme';
import * as S from './styles';

import { Button, Input, InputPassword } from "../../components";
import { useAuth } from '../../hooks/auth';
import { RouteTypesProps } from '../../routes/app.routes';



const SignIn = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  type RouteType = NativeStackNavigationProp<RouteTypesProps, 'SignUp'>;

  const { navigate } = useNavigation<RouteType>();
  const signIn = useAuth();

  async function handleSignIn() {
    try {
      const schema = Yup.object().shape({
        password: Yup.string().required('Senha obrigatória'),
        email: Yup.string().required('E-mail obrigatório')
          .email('Digite um e-mail válido'),


      })

      await schema.validate({
        email,
        password,
      }
      )
      Alert.alert('Sucesso', 'Login realizado com sucesso')

      signIn({ email, password });
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        Alert.alert('DEU RUIM MANO', error.message)
      } else {
        Alert.alert('não deu cara', 'Erro no login')
      }
    }
  }

  function handleNewAccount() {
    navigate('SignUp');
  }

  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <S.Container>
          <StatusBar
            barStyle="dark-content"
            backgroundColor="transparent"
            translucent
          />
          <S.Header>
            <S.Title>Estamos{'\n'}quase lá.</S.Title>
            <S.SubTitle>Faça seu login para começar{'\n'} uma experiência incrivel.</S.SubTitle>
          </S.Header>
          <S.Form>

            <Input
              iconName="mail"
              placeholder="E-mail"
              keyboardType="email-address"
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={setEmail}
              value={email}
            />
            <InputPassword
              iconName="lock"
              placeholder="Senha"
              onChangeText={setPassword}
              value={password}
            />

          </S.Form>


          <S.Buttons>
            <Button
              title="Login"
              onPress={() => handleSignIn()}
              enabled
              loading={false}
            />
            <Button
              title="Criar conta gratuita"
              color={theme.colors.secondary}
              light
              onPress={() => handleNewAccount()}
              enabled={false}
              loading={false}
            />
          </S.Buttons>
        </S.Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}


export default SignIn;
