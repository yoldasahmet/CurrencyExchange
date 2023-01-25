import { CurrencyArgs } from './CurrencyArgs';

export interface CurrencyApiResponse extends BaseResponse {
  base: string;
  date: string;
  rates: object;
}

export interface CurrencyApiConvertResponse extends BaseResponse {
  query: CurrencyArgs;
  date: string;
  info: { rate: number };
  historical: boolean;
  result: number;
}

export interface CurrencyApiHistoryResponse extends BaseResponse {
  base: string;
  start_date: string;
  end_date: string;
  rates: object;
}

interface BaseResponse {
  success: boolean;
  motd: any;
}
