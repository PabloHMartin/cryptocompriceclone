import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import { useRef } from "react";
import { SlugPrices } from "../../lib/models/Slug-prices";
import { useWindowSize } from "../../lib/hooks/useWindowSize";

export default function Chart(props: { data: SlugPrices }) {
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);

  const options: Highcharts.Options = {
    title: {
      text: "",
    },
    xAxis: {
      type: "datetime",
      title: {
        text: "",
      },
    },
    yAxis: {
      title: {
        text: "",
      },
    },
    series: [
      {
        name: "Price (USD)",
        showInLegend: false,
        lineColor: "#9fd7ff",
        type: "areaspline",
        data: props.data.prices,
        threshold: -Infinity,
        color: {
          linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1.2 },
          stops: [
            [0, "rgb(159,215,255, 0.5)"], // start
            [0.3, "rgb(159,215,255, 0.3)"], // start
            [0.5, "rgb(159,215,255, 0.2)"], // start
            [1, "rgb(159,215,255, 0)"], // start
          ],
        },
      },
    ],
  };

  return (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        ref={chartComponentRef}
      />
    </div>
  );
}
