import { useEffect, useState } from "react";
import { GlobalMetrics } from "../../lib/shared/models/Global-metrics";

export default function Highlightsbar() {
  const [metrics, setMetrics] = useState<GlobalMetrics>();

  useEffect(() => {
    fetch("https://price-api.crypto.com/price/v1/global-metrics")
      .then((response) => response.json())
      .then((data) => setMetrics(data.data));
  }, []);

  return <div>{metrics && metrics.coins}</div>;
}
