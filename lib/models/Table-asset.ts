export interface Platform {
  name: string;
  symbol: string;
  slug: string;
  token_id: string;
  token_address: string;
}

export interface Datum {
  id: number;
  name: string;
  symbol: string;
  slug: string;
  active: boolean;
  prices: number[];
  tags: string[];
  circulating_supply: number;
  total_supply: number;
  max_supply?: number;
  btc_price: number;
  btc_marketcap: number;
  btc_volume_24h: number;
  usd_price: number;
  usd_price_change_24h: number;
  btc_price_change_24h: number;
  usd_marketcap: number;
  usd_volume_24h: number;
  token_dominance_rate: number;
  rank: number;
  app_tradable: boolean;
  exchange_tradable: boolean;
  defi_tradable: boolean;
  restricted_areas: any[];
  usd_price_change_24h_abs: number;
  update_time: number;
  platform: Platform;
  description?: any;
  is_defi_swap?: any;
  website_urls?: any;
  whitepaper_urls?: any;
  explorer_urls?: any;
  rss_feeds?: any;
  page_title?: any;
}

export interface TableAssets {
  data: Datum[];
  total: number;
}
