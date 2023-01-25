import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import {
  Box,
  Button,
  SelectChangeEvent,
  Stack,
  TextField,
} from '@mui/material';
import React, { ReactElement, useEffect, useState } from 'react';
import { useTypedSelector } from '../../../state/store';
import Combobox from '../../primitives/combobox/Combobox';

const ConverterForm = (props: {
  currencyData: Array<{ key: string; value: string }>;
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLSelectElement>;
  onConvert: (
    amount: string,
    from: string,
    to: string
  ) => React.MouseEventHandler<HTMLButtonElement> | void;
}): ReactElement => {
  const { currencyData, onConvert } = props;

  const convertParamsState = useTypedSelector((state) => state.convertParams);

  const [amount, setAmount] = useState('');
  const [toValue, setToValue] = useState('');
  const [fromValue, setFromValue] = useState('');

  useEffect(() => {
    const { from, to, amount: amountVal } = convertParamsState;
    if (amountVal != null && amountVal > 0) {
      setAmount(String(amountVal));
      setToValue(to);
      setFromValue(from);
    }
  }, [convertParamsState]);

  const handleChangeTo = (event: SelectChangeEvent): void => {
    setToValue(event.target.value);
  };
  const handleChangeFrom = (event: SelectChangeEvent): void => {
    setFromValue(event.target.value);
  };
  const onAmountChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ): void => {
    setAmount(event.target.value);
  };

  return (
    <Box component={'form'}>
      <>
        <Stack direction="row" spacing={2} sx={{ my: 4 }}>
          <TextField
            id="standard-basic"
            label="Amount"
            variant="standard"
            fullWidth
            value={amount}
            type={'number'}
            onChange={onAmountChange}
            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
          />
          <Combobox
            title="From"
            value={fromValue}
            list={currencyData}
            onChange={handleChangeFrom}
          />
          <Button
            sx={{
              minWidth: 42,
              maxHeight: 42,
              minHeight: 42,
              alignSelf: 'flex-end',
              backgroundColor: 'white',
              webkitBoxShadow: '1px 2px 2px -1px rgba(0,0,0,0.5)',
              mozBoxShadow: '1px 2px 2px -1px rgba(0,0,0,0.5)',
              boxShadow: '1px 2px 2px -1px rgba(0,0,0,0.5)',
            }}
            onClick={() => {
              setFromValue(toValue);
              setToValue(fromValue);
            }}
          >
            <CompareArrowsIcon color="primary" />
          </Button>
          <Combobox
            title="To"
            value={toValue}
            list={currencyData}
            onChange={handleChangeTo}
          />

          <Button
            onClick={() => onConvert(amount, fromValue, toValue)}
            variant="contained"
            color="primary"
            sx={{
              my: 2,
              pl: 3,
              pr: 3,
              minWidth: 120,
              maxHeight: 42,
              minHeight: 42,
              alignSelf: 'flex-end',
            }}
          >
            CONVERT
          </Button>
        </Stack>
      </>
    </Box>
  );
};

export default ConverterForm;
