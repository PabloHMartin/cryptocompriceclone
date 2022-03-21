import { GlobalMetrics } from "../../lib/models/Global-metrics";
import { useQuery } from "react-query";
import { fetchGlobalMetrics } from "../../lib/queries/queries";
import { LinearProgress } from "@mui/material";
import { GlobalmetricsStyle, MetricStyle } from "../../styles/global-metrics";

export default function GlobalMetricsBar() {
  const {
    data: metrics,
    isLoading,
    isError,
  } = useQuery<GlobalMetrics>("metrics", fetchGlobalMetrics);

  if (isLoading) return <LinearProgress />;
  if (isError) return <div>Error</div>;

  if (metrics) {
    return (
      <GlobalmetricsStyle>
        <MetricStyle>
          <div>Coins</div>
          <div>{metrics.coins}</div>
        </MetricStyle>
        <MetricStyle>
          <div>Market&#160;Cap</div>
          <div>${metrics.market_cap}</div>
        </MetricStyle>
        <MetricStyle>
          <div>24H&#160;Change</div>
          <div>{metrics.market_cap_change_rate}</div>
        </MetricStyle>
        <MetricStyle>
          <div>24H&#160;Volume</div>
          <div>${metrics.volume_24h}</div>
        </MetricStyle>
        <MetricStyle>
          <div>Dominance</div>
          <div>{metrics.btc_dominance_rate}</div>
        </MetricStyle>
        <MetricStyle>
          <div>ETH&#160;Gas</div>
          <div>{metrics.eth_gas} Gwei</div>
        </MetricStyle>
      </GlobalmetricsStyle>
    );
  }

  return <div></div>;
}
