import { Box, Grid, SelectChangeEvent } from '@mui/material';
import React, { ReactElement, useCallback, useEffect, useState } from 'react';
import DataTable from '../../../components/composites/data-table/DataTable';
import Combobox from '../../../components/primitives/combobox/Combobox';
import Label from '../../../components/primitives/label/Label';
import RadioList from '../../../components/primitives/radio-list/RadioList';
import { useLazyGetRateHistoryQuery } from '../../../state/apis/currency/CurrencyApi';
import { updateParams } from '../../../state/slices/converter/ConverterSlice';
import { useTypedDispatch, useTypedSelector } from '../../../state/store';
import { Sparklines, SparklinesLine, SparklinesBars } from 'react-sparklines';

const CurrencyConverterHistorySection = (): ReactElement => {
  const convertParamsState = useTypedSelector((state) => state.convertParams);
  const { duration, from, to, amount } = convertParamsState;
  const [selectedView, setSelectedView] = useState('Table');
  const dispatch = useTypedDispatch();
  const [getRateHistory, { data, isLoading }] = useLazyGetRateHistoryQuery();

  useEffect(() => {
    if (from !== '' && duration != null) {
      void getRateHistory({
        base: from,
        duration: duration > 0 ? duration : 7,
      });
    }
  }, [duration, from]);

  const rateList = (): Array<{
    date: string;
    rate: string;
  }> => {
    return data != null
      ? Object.keys(data.rates)
          .map((item) => {
            return {
              date: item,
              rate: Number(data.rates[item as keyof object][to]).toFixed(6),
            };
          })
          .reverse()
      : [];
  };

  const rates =
    data != null
      ? Object.keys(data.rates)
          .map((item) => Number(data.rates[item as keyof object][to]))
          .reverse()
      : [];

  const getStatistics = (): Array<{
    name: string;
    rate: number;
  }> => {
    const maxRate = Math.max(...rates);
    const minRate = Math.min(...rates);
    const avgRate = rates.reduce((a, b) => a + b, 0) / rates.length;

    return [
      { name: 'Lowest', rate: minRate },
      { name: 'Highest', rate: maxRate },
      { name: 'Average', rate: Number(avgRate.toFixed(6)) },
    ];
  };

  const resetLinkHandler = useCallback(
    (e: any, from: string, to: string, amount: number, duration: number) => {
      e.preventDefault();
      dispatch(
        updateParams({
          from,
          to,
          amount,
          duration: Number(e.target.value),
        })
      );
    },
    []
  );

  if (isLoading) {
    return <div>Loading</div>;
  }

  return (
    <Box>
      {!(isLoading ?? false) && data?.success != null ? (
        <Box>
          <Box>
            <Label variant="h5" text={'Exchange History'} gap={3} bold />

            <Grid container spacing={5} mb={2}>
              <Grid item xs={2}>
                <Combobox
                  title="Duration"
                  value={String(duration)}
                  list={[
                    { key: '7 Days', value: '7' },
                    { key: '14 Days', value: '14' },
                    { key: '30 Days', value: '30' },
                  ]}
                  onChange={(e: SelectChangeEvent<string>): void => {
                    resetLinkHandler(e, from, to, amount, Number(duration));
                  }}
                />
              </Grid>

              <Grid item xs={4} sx={{ textAlign: 'end' }}>
                <RadioList
                  items={['Table', 'Chart']}
                  onChange={(e, v) => {
                    setSelectedView(v);
                  }}
                />
              </Grid>
            </Grid>
          </Box>

          {selectedView === 'Table' ? (
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={6}>
                <DataTable
                  data={rateList()}
                  idkey={'date'}
                  columns={['Date', 'Exchange rate']}
                  datakeys={['date', 'rate']}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <DataTable
                  data={getStatistics()}
                  idkey={'name'}
                  columns={['Statistics', ' ']}
                  datakeys={['name', 'rate']}
                />
              </Grid>
            </Grid>
          ) : (
            <Grid container spacing={2}>
              <Grid
                item
                xs={12}
                sx={{ backgroundColor: 'white', margin: 2, borderRadius: 4 }}
              >
                <Sparklines data={rates}>
                  <SparklinesLine color="#009688" />
                  <SparklinesBars
                    style={{ fill: '#94C720', fillOpacity: '.25' }}
                  />
                </Sparklines>
              </Grid>
            </Grid>
          )}
        </Box>
      ) : (
        <></>
      )}
    </Box>
  );
};

export default CurrencyConverterHistorySection;
