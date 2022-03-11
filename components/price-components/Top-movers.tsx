import { TopMover } from "../../lib/models/Top-mover";
import Card from "@mui/material/Card";
import { CardContent } from "@mui/material";
import { maxWidth } from "@mui/system";
import styled from "@emotion/styled";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";

const TopMoversContainer = styled.div`
  font-size: 0.75rem;
  font-weight: 500;
  display: flex;
`;

export default function TopMovers({ topMovers }: { topMovers: TopMover[] }) {
  return (
    <>
      <h3>Top Movers</h3>
      <SwiperOpts topMovers={topMovers} />
    </>
  );
}

const SwiperOpts = ({ topMovers }: { topMovers: TopMover[] }) => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={2.5}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
    >
      <TopMoversContainer>
        {topMovers.map((mover: TopMover, index: number) => (
          <SwiperSlide key={index}>
            <CardOption mover={mover} />
          </SwiperSlide>
        ))}
      </TopMoversContainer>
    </Swiper>
  );
};

const CardOption = ({ mover }: { mover: TopMover }) => {
  return (
    <Card sx={{ maxWidth: 200 }}>
      <CardContent>
        <h3>{mover.name}</h3>
      </CardContent>
    </Card>
  );
};
