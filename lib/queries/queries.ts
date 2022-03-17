import axios from "axios";
import httpClient from "../../components/shared/http-client";
import { Slug } from "../models/Slug-backend";
import { SlugPrices } from "../models/Slug-prices";
import { TableAssets } from "../models/Table-asset";
import { TokenInfo } from "../models/Token-info";
import { TopMover } from "../models/Top-mover";

const coinapi = process.env.NEXT_PUBLIC_COINAPI ?? "";

export const fetchGlobalMetrics = async () => {
  const res = await httpClient.get("/v1/global-metrics");
  return res.data.data;
};

export const fetchTopMovers = async (): Promise<TopMover[]> => {
  const res = await httpClient.get("/v1/top-movers?depth=10");
  return res.data;
};

export const fetchTableAssets = async (
  pageNumber: number
): Promise<TableAssets> => {
  const res = await httpClient.get(`/v1/tokens?page=${pageNumber}&limit=50`);
  return res.data;
};

export const fetchSlug = async (
  slug: string | string[] | undefined
): Promise<Slug> => {
  const res = await httpClient.get(`v1/exchange/${slug}`);
  return res.data;
};

export const fetchSlugPrices = async (
  slug: string | string[] | undefined
): Promise<SlugPrices> => {
  const res = await httpClient.get(`v2/d/${slug}`);
  return res.data;
};

export const fetchTokenInfo = async (
  slug: string | string[] | undefined
): Promise<TokenInfo> => {
  const res = await httpClient.get(`v1/tokens/${slug}`);
  return res.data;
};

export const fetchIcons = async () => {
  const res = await axios.get("http://rest.coinapi.io/v1/assets/icons/24", {
    headers: {
      "X-CoinAPI-Key": coinapi,
    },
  });
  return res.data;
};
