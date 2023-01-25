import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  CurrencyApiConvertResponse,
  CurrencyApiHistoryResponse,
  CurrencyApiResponse,
} from '../../../models/currency/CurrencyApiResponse';
import {
  CurrencyConvertArgs,
  CurrencyRateHistoryArgs,
} from '../../../models/currency/CurrencyArgs';

export const currencyApi = createApi({
  reducerPath: 'currencyApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.exchangerate.host/',
  }),
  endpoints: (builder) => ({
    getCurrencies: builder.query<CurrencyApiResponse, void>({
      query: () => `latest`,
    }),
    convertCurrencies: builder.query<
      CurrencyApiConvertResponse,
      CurrencyConvertArgs
    >({
      query: ({ from, to, amount }) =>
        `convert?from=${from}&to=${to}&amount=${String(amount)}`,
    }),
    getRateHistory: builder.query<
      CurrencyApiHistoryResponse,
      CurrencyRateHistoryArgs
    >({
      query: ({ base, duration }) =>
        `timeseries?base=${base}&start_date=${new Date(
          Date.now() - (duration - 1) * 24 * 60 * 60 * 1000
        )
          .toISOString()
          .slice(0, 10)}&end_date=${new Date().toISOString().slice(0, 10)}`,
    }),
  }),
});

export const {
  useGetCurrenciesQuery,
  useLazyConvertCurrenciesQuery,
  useLazyGetRateHistoryQuery,
} = currencyApi;
