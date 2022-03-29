import React, { useState } from 'react';
import { KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';


import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Feather from 'react-native-vector-icons/Feather';
import * as Yup from 'yup';

import * as S from './styles';

import { BackButton, Bullet, Input, Button } from '../../components';
import { RouteTypesProps } from '../../routes/app.routes';



const SignUp = () => {

  type RouteType = NativeStackNavigationProp<RouteTypesProps, 'CardDetail'>;
  const { navigate } = useNavigation<RouteType>();
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [driveLicense, setDriveLicense] = useState('');



  async function handleNextStep() {
    try {

      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        email: Yup.string().email('Digite um e-mail válido').required('E-mail obrigatório'),
        driveLicense: Yup.string().required('CNH obrigatório'),
      });

      const data = { name, email, driveLicense };

      await schema.validate(data)

      navigate('SignUpSecond', { user: data });


    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        return Alert.alert('Erro na validação', error.message);
      }
    }
  }
  function handleBack() {
    navigation.goBack();
  }

  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <S.Container>
          <S.Header>
            <BackButton
              onPress={handleBack}
            />
            <S.Steps>
              <Bullet active />
              <Bullet />
            </S.Steps>

          </S.Header>

          <S.Title>
            Crie sua {'\n'} conta
          </S.Title>
          <S.Subtitle>
            Faça seu cadastro de {'\n'}
            forma rapida e fácil
          </S.Subtitle>

          <S.Form>
            <S.FormTitle>1. DADOS</S.FormTitle>
            <Input
              iconName='user'
              placeholder='Nome'
              value={name}
              onChangeText={setName}
            />

            <Input
              iconName='mail'
              placeholder='E-Mail'
              keyboardType='email-address'
              value={email}
              onChangeText={setEmail}
            />

            <Input
              iconName='credit-card'
              placeholder='CNH'
              keyboardType='numeric'
              value={driveLicense}
              onChangeText={setDriveLicense}
            />

          </S.Form>

          <Button
            title='Próximo'
            onPress={handleNextStep}
          />

        </S.Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}


export default SignUp;
