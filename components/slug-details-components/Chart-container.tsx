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
  ChartContainerHeaderSectionPercent,
  ChartContainerHeaderSectionDesktop,
  ChartContainerHeaderSectionRateAndPercent,
  ChartContainerHeaderSectionSub,
  ChartContainerHeaderSectionPercentSub,
  ChartContainerHeaderSectionIcons,
} from "../../styles/chart-container-styles";
import Image from "next/image";
import { useWindowSize } from "../../lib/hooks/useWindowSize";
import { useModal } from "../../lib/hooks/useModal";
import { UiModal } from "../shared/UiModal";

export default function ChartContainer({
  tokenInfo,
  data,
}: {
  tokenInfo: TokenInfo;
  data: SlugPrices;
}) {
  const size = useWindowSize();
  const [modalIsVisible, toggleModalVisibility] = useModal();

  function currencyFormat(num: number) {
    return "$" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }

  return (
    <ChartContainerStyled>
      <ChartContainerHeader>
        <ChartContainerHeaderSection>
          <ChartContainerHeaderSectionRateAndPercent>
            <ChartContainerHeaderSectionRate>
              {currencyFormat(Number(tokenInfo.usd_price.toFixed(2)))} USD
            </ChartContainerHeaderSectionRate>
            <ChartContainerHeaderSectionPercent>
              {(data.price_change * 100).toFixed(2)}% <span>(24H)</span>
            </ChartContainerHeaderSectionPercent>
          </ChartContainerHeaderSectionRateAndPercent>
          {size.width > 1440 && (
            <ChartContainerHeaderSectionDesktop>
              <div>
                <Image
                  onClick={toggleModalVisibility}
                  src={"/icons/download.svg"}
                  alt="asset logo"
                  width={24}
                  height={24}
                />
              </div>
              <div>
                <Image
                  onClick={toggleModalVisibility}
                  src={"/icons/share.svg"}
                  alt="asset logo"
                  width={24}
                  height={24}
                />
              </div>
            </ChartContainerHeaderSectionDesktop>
          )}
        </ChartContainerHeaderSection>

        {size.width < 1440 && (
          <ChartContainerHeaderSectionIcons>
            <div>
              <Image
                onClick={toggleModalVisibility}
                src={"/icons/download.svg"}
                alt="asset logo"
                width={24}
                height={24}
              />
            </div>
            <div>
              <Image
                onClick={toggleModalVisibility}
                src={"/icons/share.svg"}
                alt="asset logo"
                width={24}
                height={24}
              />
            </div>
          </ChartContainerHeaderSectionIcons>
        )}

        <ChartContainerHeaderSectionSub>
          <ChartContainerHeaderSectionPercentSub>
            {tokenInfo.btc_price} BTC
          </ChartContainerHeaderSectionPercentSub>
          <ChartContainerHeaderSectionPercentSub>
            {tokenInfo.btc_price_change_24h.toFixed(2)}% <span>(24H)</span>{" "}
          </ChartContainerHeaderSectionPercentSub>
        </ChartContainerHeaderSectionSub>
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
      <UiModal
        isVisible={modalIsVisible}
        toggleVisibility={toggleModalVisibility}
      />
    </ChartContainerStyled>
  );
}
