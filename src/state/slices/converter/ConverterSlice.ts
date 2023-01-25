import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CurrencyArgs } from '../../../models/currency/CurrencyArgs';

interface ConvertParamsState extends CurrencyArgs {}

const initialState: ConvertParamsState = {
  from: '',
  to: '',
  amount: 0,
  duration: 7,
};

const convertParamsSlice = createSlice({
  name: 'convertParams',
  initialState,
  reducers: {
    updateParams: (state, action: PayloadAction<ConvertParamsState>) => {
      return { ...state, ...action.payload };
    },
    resetParams: () => {
      return initialState;
    },
  },
});

export const { updateParams, resetParams } = convertParamsSlice.actions;

export default convertParamsSlice.reducer;
