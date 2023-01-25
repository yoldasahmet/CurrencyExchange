import React from 'react';
import AppRouter from './navigation/AppRouter';
import AppProvider from './provider/AppProvider';

const App = (): React.ReactElement => {
  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  );
};

export default App;
