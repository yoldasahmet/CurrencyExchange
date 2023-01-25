export interface CurrencyArgs {
  from: string;
  to: string;
  amount: number;
  duration?: number;
}

export interface CurrencyRateHistoryArgs {
  base: string;
  duration: number;
}

export interface CurrencyConvertArgs {
  from: string;
  to: string;
  amount: number;
}
