import { GlobalMetrics } from "../../lib/models/Global-metrics";
import { useQuery } from "react-query";
import { fetchGlobalMetrics } from "../../lib/queries/queries";
import { LinearProgress } from "@mui/material";
import {
  GlobalmetricsStyle,
  GlobalmetricsStyleWrapper,
  MetricStyle,
  MetricStyleInfo,
  MetricStyleTitle,
} from "../../styles/global-metrics";

export default function GlobalMetricsBar() {
  const {
    data: metrics,
    isLoading,
    isError,
  } = useQuery<GlobalMetrics>("metrics", fetchGlobalMetrics);

  function currencyFormat(num: number) {
    return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }
  function currencyFormatBillions(num: number) {
    let numToB = num / 1000000000;
    return numToB.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }

  if (isLoading) return <LinearProgress />;
  if (isError) return <div>Error</div>;

  if (metrics) {
    return (
      <GlobalmetricsStyleWrapper>
        <GlobalmetricsStyle>
          <MetricStyle>
            <MetricStyleTitle>Coins</MetricStyleTitle>
            <MetricStyleInfo>{currencyFormat(metrics.coins)}</MetricStyleInfo>
          </MetricStyle>
          <MetricStyle>
            <MetricStyleTitle>Market&#160;Cap</MetricStyleTitle>
            <MetricStyleInfo>
              ${currencyFormatBillions(metrics.market_cap) + ` B USD`}
            </MetricStyleInfo>
          </MetricStyle>
          <MetricStyle>
            <MetricStyleTitle>24H&#160;Change</MetricStyleTitle>
            <MetricStyleInfo>
              {(metrics.market_cap_change_rate * 100).toFixed(2)}%
            </MetricStyleInfo>
          </MetricStyle>
          <MetricStyle>
            <MetricStyleTitle>24H&#160;Volume</MetricStyleTitle>
            <MetricStyleInfo>
              ${(metrics.volume_24h / 1000000000).toFixed(2) + ` B USD`}
            </MetricStyleInfo>
          </MetricStyle>
          <MetricStyle>
            <MetricStyleTitle>Dominance</MetricStyleTitle>
            <MetricStyleInfo>
              BTC: {(metrics.btc_dominance_rate * 100).toFixed(2)}% BTC:{" "}
              {(metrics.eth_dominance_rate * 100).toFixed(2)}%
            </MetricStyleInfo>
          </MetricStyle>
          <MetricStyle>
            <MetricStyleTitle>ETH&#160;Gas</MetricStyleTitle>
            <MetricStyleInfo>{metrics.eth_gas} Gwei</MetricStyleInfo>
          </MetricStyle>
        </GlobalmetricsStyle>
      </GlobalmetricsStyleWrapper>
    );
  }

  return <div></div>;
}
