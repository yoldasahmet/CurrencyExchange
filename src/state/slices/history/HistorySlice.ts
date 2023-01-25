import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CurrencyConvertArgs } from '../../../models/currency/CurrencyArgs';

interface RateHistory extends CurrencyConvertArgs {
  id: string;
  datetime: string;
  event: string;
}

interface RateHistoryState {
  list: RateHistory[];
}

const initialState: RateHistoryState = {
  list: [],
};

const rateHistoryListSlice = createSlice({
  name: 'rateHistory',
  initialState,
  reducers: {
    addHistory: (state, action: PayloadAction<RateHistory>) => {
      state.list.unshift(action.payload);
    },
    removeHistory: (state, action: PayloadAction<string>) => {
      state.list = state.list.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addHistory, removeHistory } = rateHistoryListSlice.actions;

export default rateHistoryListSlice.reducer;
