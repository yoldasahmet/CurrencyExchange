import { Routes, Route } from 'react-router-dom';
import ConversionHistoryPage from '../../pages/conversion-history/ConversionHistoryPage';
import CurrencyConverterPage from '../../pages/currency-converter/CurrencyConverterPage';
import ErrorPage from '../../pages/error/ErrorPage';
import AppLayout from '../layout/AppLayout';
import React, { ReactElement } from 'react';

const AppRouter = (): ReactElement => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<CurrencyConverterPage />} />
        <Route path="/conversion-history" element={<ConversionHistoryPage />} />

        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
