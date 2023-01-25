import React, { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ConverterForm from '../../components/composites/converter-form/ConverterForm';
import { useGetCurrenciesQuery } from '../../state/apis/currency/CurrencyApi';
import { updateParams } from '../../state/slices/converter/ConverterSlice';
import { addHistory } from '../../state/slices/history/HistorySlice';
import { useTypedDispatch } from '../../state/store';
import PageContainer from '../base/PageContainer';
import CurrencyConverterHistorySection from './sections/CurrencyConverterHistorySection';
import CurrencyConverterResultSection from './sections/CurrencyConverterResultSection';

const CurrencyConverterPage = (): React.ReactElement => {
  const [currencyList, setCurrencyList] = useState<
    Array<{ key: string; value: string }>
  >([]);
  const { state } = useLocation();
  const { data, isLoading } = useGetCurrenciesQuery();
  const dispatch = useTypedDispatch();

  useEffect(() => {
    if (state != null && String(state.from) !== '') {
      const { from, to, amount } = state;
      dispatch(
        updateParams({
          amount: Number(amount),
          from,
          to,
        })
      );
      window.history.replaceState({}, document.title);
    }
  }, [state]);

  useEffect(() => {
    if (data?.rates != null) {
      setCurrencyList(
        Object.keys(data.rates).map((item) => {
          return { key: item, value: item };
        })
      );
    }
  }, [data]);

  const convertButtonHandler = useCallback(
    (amount: string, from: string, to: string, dateValue: Date) => {
      dispatch(
        updateParams({
          amount: Number(amount),
          from,
          to,
        })
      );

      dispatch(
        addHistory({
          amount: Number(amount),
          from,
          to,
          event: `Converted an amount of ${amount} from ${from} to ${to}`,
          id: dateValue.getTime().toString(),
          datetime: dateValue.toISOString(),
        })
      );
    },
    []
  );

  if (isLoading) {
    return <div>Loading</div>;
  }

  return (
    <PageContainer contentTitle="I want to convert">
      <ConverterForm
        currencyData={currencyList}
        onConvert={(amount, from, to) => {
          const dateValue = new Date();
          convertButtonHandler(amount, from, to, dateValue);
        }}
      />

      <CurrencyConverterResultSection />

      <CurrencyConverterHistorySection />
    </PageContainer>
  );
};

export default CurrencyConverterPage;
