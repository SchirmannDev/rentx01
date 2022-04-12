import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components/native';

import theme from './styles/theme';

import { AppProvider } from './hooks';
import IndexRoutes from './routes';
import Routes from './routes/app.routes';


const App = () => {
  return (
    <ThemeProvider theme={theme}>

      <AppProvider>
        <IndexRoutes />
      </AppProvider>

    </ThemeProvider>
  );
};

export default App;
