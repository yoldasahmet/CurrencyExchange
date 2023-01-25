import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { currencyApi } from './apis/currency/CurrencyApi';
import convertParamsReducer from './slices/converter/ConverterSlice';
import rateHistoryReducer from './slices/history/HistorySlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['rateHistory'],
};

const reducers = {
  convertParams: convertParamsReducer,
  rateHistory: rateHistoryReducer,
  [currencyApi.reducerPath]: currencyApi.reducer,
};

const combinedReducer = combineReducers<typeof reducers>(reducers);

const persistedReducer = persistReducer(persistConfig, combinedReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat([currencyApi.middleware]),
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof combinedReducer>;
export const useTypedDispatch = (): AppDispatch => useDispatch<AppDispatch>();
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
