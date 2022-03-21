import React from "react";
import { SlugPrices } from "../../lib/models/Slug-prices";
import { TokenInfo } from "../../lib/models/Token-info";
import Chart from "./Chart";
import {
  ChartContainerStyled,
  ChartContainerHeader,
  ChartContainerHeaderSection,
  ChartContainerHeaderSectionRate,
  ChartContainerFooter,
  ChartContainerHeaderCol,
  CellInfo,
  CellInfoTitle,
  CellInfoInfo,
} from "../../styles/chart-container-styles";

export default function ChartContainer({
  tokenInfo,
  data,
}: {
  tokenInfo: TokenInfo;
  data: SlugPrices;
}) {
  function currencyFormat(num: number) {
    return "$" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }

  return (
    <ChartContainerStyled>
      <ChartContainerHeader>
        <ChartContainerHeaderSection>
          <ChartContainerHeaderSectionRate>
            {currencyFormat(Number(tokenInfo.usd_price.toFixed(2)))} USD
          </ChartContainerHeaderSectionRate>
          <div>{(data.price_change * 100).toFixed(2)}% (24H)</div>
        </ChartContainerHeaderSection>

        <ChartContainerHeaderSection>
          <div>(I)</div>
          <div>(I)</div>
        </ChartContainerHeaderSection>

        <ChartContainerHeaderSection>
          <div>{tokenInfo.btc_price} BTC</div>
          <div>{tokenInfo.btc_price_change_24h.toFixed(2)} (24H)</div>
        </ChartContainerHeaderSection>
      </ChartContainerHeader>

      <Chart data={data} />

      <ChartContainerFooter>
        <ChartContainerHeaderCol>
          <CellInfo>
            <CellInfoTitle>Market Cap (USD)</CellInfoTitle>
            <CellInfoInfo>
              ${(tokenInfo.usd_marketcap / 1000000000).toFixed(2)} B
            </CellInfoInfo>
          </CellInfo>
          <CellInfo>
            <CellInfoTitle>Circulating Supply</CellInfoTitle>
            <CellInfoInfo>
              {" "}
              {(tokenInfo.circulating_supply / 1000000).toFixed(2)} M
              {tokenInfo.symbol}
            </CellInfoInfo>
          </CellInfo>
        </ChartContainerHeaderCol>

        <ChartContainerHeaderCol>
          <CellInfo>
            <CellInfoTitle>24H VOLUME (USD)</CellInfoTitle>
            <CellInfoInfo>
              ${(tokenInfo.usd_volume_24h / 1000000000).toFixed(2)} B
            </CellInfoInfo>
          </CellInfo>
          <CellInfo>
            <CellInfoTitle>Max Supply</CellInfoTitle>
            <CellInfoInfo>
              {(tokenInfo.max_supply / 1000000).toFixed(2)} M {tokenInfo.symbol}
            </CellInfoInfo>
          </CellInfo>
        </ChartContainerHeaderCol>
      </ChartContainerFooter>
    </ChartContainerStyled>
  );
}
