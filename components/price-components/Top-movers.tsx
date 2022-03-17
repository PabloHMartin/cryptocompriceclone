import { TopMover } from "../../lib/models/Top-mover";
import Card from "@mui/material/Card";
import Image from "next/image";
import { CardContent } from "@mui/material";
import styled from "@emotion/styled";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";

const SwiperContainer = styled.div`
  font-size: 0.75rem;
  font-weight: 500;
  display: flex;
`;

const TopMoversContainer = styled.div`
  background-color: #f5f6f9;
  padding: 1rem 0.8rem 1rem;
  h2 {
    font-size: 24px;
    margin-top: 0;
  }
`;

const SwiperOptsStyled = styled.div`
  padding-bottom: 0.5rem;
`;

const SwiperCustom = styled(Swiper)`
  padding-bottom: 1rem !important;
`;
const CardContentStyled = styled(CardContent)``;

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

const CardTop = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  padding-bottom: 0.5rem;
`;
const CardAssetName = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: bold;
`;
const CardAssetRate = styled.div`
  font-weight: bold;
  padding-top: 0.5rem;
  font-size: 16px;
`;
const CardAssetRateDiff = styled.div`
  font-size: 14px;
  font-weight: bold;
`;

const CardBottom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  font-size: 14px;
`;

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
