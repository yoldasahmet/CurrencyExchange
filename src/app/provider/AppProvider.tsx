import { ThemeProvider } from '@mui/material/styles';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import ProgressPage from '../../pages/progress/ProgressPage';
import { persistor, store } from '../../state/store';
import ceTheme from '../../theme/ceTheme';

const AppProvider = (props: any): any => {
  return (
    <Provider store={store}>
      <PersistGate loading={<ProgressPage />} persistor={persistor}>
        <ThemeProvider theme={ceTheme}>
          <BrowserRouter>{props.children}</BrowserRouter>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};

export default AppProvider;
