import { TopMover } from "../../lib/models/Top-mover";
import Image from "next/image";
import { SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { useWindowSize } from "../../lib/hooks/useWindowSize";
// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
  TopMoversContainer,
  SwiperOptsStyled,
  SwiperCustom,
  SwiperContainer,
  CardContentStyled,
  CardTop,
  CardAssetRateDiff,
  CardBottom,
  CardAssetName,
  CardAssetRate,
  CardAssetNameWrapper,
  MinichartWrapper,
  CardStyled,
} from "../../styles/top-mover-styles";
import Link from "next/link";
import MiniChart from "./Mini-chart";
import { Usei18N } from "../../lib/context/i18n";

export default function TopMovers({ topMovers }: { topMovers: TopMover[] }) {
  const { t } = Usei18N();

  return (
    <TopMoversContainer>
      <h2>{t("TOP_MOVERS")}</h2>
      <SwiperOptsStyled>
        <SwiperOpts topMovers={topMovers} />
      </SwiperOptsStyled>
    </TopMoversContainer>
  );
}

const SwiperOpts = ({ topMovers }: { topMovers: TopMover[] }) => {
  const size = useWindowSize();

  return (
    <SwiperCustom
      spaceBetween={size.width > 1440 ? 20 : 50}
      slidesPerView={size.width > 1440 ? 4 : 2.5}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
    >
      <SwiperContainer>
        {topMovers.map((mover: TopMover, index: number) => (
          <SwiperSlide key={index}>
            <CardOption mover={mover} />
          </SwiperSlide>
        ))}
      </SwiperContainer>
    </SwiperCustom>
  );
};

const CardOption = ({ mover }: { mover: TopMover }) => {
  const size = useWindowSize();
  return (
    <Link href={`price/${mover.slug}`} passHref shallow={true}>
      <CardStyled
        sx={size.width < 1440 ? { minWidth: 150 } : { minWidth: 300 }}
        elevation={0}
      >
        <CardContentStyled>
          <CardTop>
            {mover.icon ? (
              <Image src={mover.icon} alt="asset logo" width={24} height={24} />
            ) : (
              <Image
                src="/color_icon.png"
                alt="asset logo"
                width={size.width < 1440 ? 24 : 32}
                height={size.width < 1440 ? 24 : 32}
              />
            )}

            {size.width < 1440 ? (
              <CardAssetRateDiff>10.85%</CardAssetRateDiff>
            ) : (
              <MinichartWrapper>
                <MiniChart prices={mover.prices} />
              </MinichartWrapper>
            )}
          </CardTop>
          <CardBottom>
            <CardAssetNameWrapper>
              <CardAssetName>{mover.name}</CardAssetName>
              <div>{mover.symbol}</div>
            </CardAssetNameWrapper>
            <CardAssetRate>
              <div>${mover.usd_price.toFixed(2)} </div>
              {size.width > 1440 && (
                <CardAssetRateDiff>
                  {mover.usd_price_change_24h.toFixed(2)}%
                </CardAssetRateDiff>
              )}
            </CardAssetRate>
          </CardBottom>
        </CardContentStyled>
      </CardStyled>
    </Link>
  );
};
