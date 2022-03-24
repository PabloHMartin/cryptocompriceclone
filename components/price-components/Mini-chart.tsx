import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import { useRef } from "react";

export default function MiniChart({ prices }: { prices: number[] }) {
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);

  const options: Highcharts.Options = {
    title: {
      text: "",
    },
    credits: {
      enabled: false,
    },
    tooltip: {
      enabled: false,
    },
    chart: {
      backgroundColor: "rgba(0,0,0,0)",
    },
    xAxis: {
      visible: false,
      width: "200px",
    },
    yAxis: {
      visible: false,
      height: 50,
    },
    series: [
      {
        marker: {
          enabled: false,
        },
        states: {
          hover: {
            enabled: false,
          },
        },
        showInLegend: false,
        type: "line",
        data: prices,
        threshold: -Infinity,
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
  return <div>Mini-chart</div>;
}
