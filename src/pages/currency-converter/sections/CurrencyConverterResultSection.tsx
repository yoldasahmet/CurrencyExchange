import { Box, Divider } from '@mui/material';
import React, { ReactElement, useEffect } from 'react';
import ConverterView from '../../../components/composites/converter-view/ConverterView';
import { useLazyConvertCurrenciesQuery } from '../../../state/apis/currency/CurrencyApi';
import { useTypedSelector } from '../../../state/store';

const CurrencyConverterResultSection = (): ReactElement => {
  const convertParamsState = useTypedSelector((state) => state.convertParams);
  const { amount, from, to } = convertParamsState;

  const [convertCurrencies, { data, isLoading }] =
    useLazyConvertCurrenciesQuery();

  useEffect(() => {
    if (amount != null && amount > 0) {
      void convertCurrencies({ from, to, amount: Number(amount) });
    }
  }, [amount, from, to]);

  return (
    <Box>
      {!(isLoading ?? false) && data?.success != null ? (
        <>
          <ConverterView
            amount={data?.query.amount}
            rate={data?.info.rate}
            from={data?.query.from ?? ''}
            to={data?.query.to ?? ''}
            result={data.result}
          />
          <Divider sx={{ marginBottom: 4 }} />
        </>
      ) : (
        <></>
      )}
    </Box>
  );
};

export default CurrencyConverterResultSection;
