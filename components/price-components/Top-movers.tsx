import { TopMover } from "../../lib/models/Top-mover";
import Card from "@mui/material/Card";
import Image from "next/image";
import { SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
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
} from "../../styles/top-mover-styles";

export default function TopMovers({ topMovers }: { topMovers: TopMover[] }) {
  return (
    <TopMoversContainer>
      <h2>Top Movers</h2>
      <SwiperOptsStyled>
        <SwiperOpts topMovers={topMovers} />
      </SwiperOptsStyled>
    </TopMoversContainer>
  );
}

const SwiperOpts = ({ topMovers }: { topMovers: TopMover[] }) => {
  return (
    <SwiperCustom
      spaceBetween={50}
      slidesPerView={2.5}
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
  return (
    <Card sx={{ minWidth: 150 }} elevation={0}>
      <CardContentStyled>
        <CardTop>
          {mover.icon ? (
            <Image src={mover.icon} alt="asset logo" width={24} height={24} />
          ) : (
            <Image
              src="/color_icon.png"
              alt="asset logo"
              width={24}
              height={24}
            />
          )}

          <CardAssetRateDiff>10.85%</CardAssetRateDiff>
        </CardTop>
        <CardBottom>
          <CardAssetName>{mover.name}</CardAssetName>
          <div>{mover.symbol}</div>
          <CardAssetRate>${mover.usd_price.toFixed(2)}</CardAssetRate>
        </CardBottom>
      </CardContentStyled>
    </Card>
  );
};
