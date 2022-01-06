import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components/native';

import theme from './styles/theme';

import { Home } from './screens';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Home />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
