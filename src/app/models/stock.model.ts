export interface Stock {
  house: string;
  stock_values: [
    {
      date: string;
      price: number;
    }
  ]
}
