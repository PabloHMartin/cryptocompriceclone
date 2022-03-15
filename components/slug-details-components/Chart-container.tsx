import React from "react";
import { SlugPrices } from "../../lib/models/Slug-prices";
import { TokenInfo } from "../../lib/models/Token-info";
import Chart from "./Chart";
import styled from "@emotion/styled";

const ChartContainerStyled = styled.div`
  background-color: #fff;
  margin: 1rem 0rem;
  padding: 1rem;
  padding-bottom: 0;
`;
const ChartContainerHeader = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;
const ChartContainerHeaderSection = styled.div`
  display: flex;
  align-items: baseline;
  margin-bottom: 0.5rem;
`;
const ChartContainerHeaderSectionRate = styled.div`
  font-size: 22px;
  margin-right: 1rem;
`;

const ChartContainerFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 1rem;
  padding-bottom: 0;
`;
const ChartContainerHeaderCol = styled.div`
  padding: 0.5rem 0rem;
  font-weight: bold;
`;

const CellInfo = styled.div`
  padding: 1rem 0rem;
`;
const CellInfoTitle = styled.div`
  font-size: 14px;
  padding-bottom: 0.2rem;
`;
const CellInfoInfo = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

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
