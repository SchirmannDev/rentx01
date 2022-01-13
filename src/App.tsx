import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components/native';

import theme from './styles/theme';

import Routes from './routes/app.routes';
import { CarDetail } from './screens';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
