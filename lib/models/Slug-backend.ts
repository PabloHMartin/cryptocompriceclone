export interface Fiat {
  usd: number;
  gbp: number;
  eur: number;
  sgd: number;
  aud: number;
  cad: number;
  cny: number;
  hkd: number;
  krw: number;
}

export interface Crypto {
  btc: number;
  eth: number;
  cro: number;
}

export interface AssetInfo {
  slug: string;
  symbol: string;
  fiat: Fiat;
  crypto: Crypto;
  update_time: number;
  icon?: string;
}
