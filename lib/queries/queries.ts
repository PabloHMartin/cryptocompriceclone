import httpClient from "../../components/shared/http-client";
import { TopMover } from "../models/Top-mover";

export const fetchGlobalMetrics = async () => {
  const res = await httpClient.get("/v1/global-metrics");
  return res.data.data;
};

export const fetchTopMovers = async (): Promise<TopMover[]> => {
  const res = await httpClient.get("/v1/top-movers?depth=10");
  return res.data;
};
