import styled from "@emotion/styled";
import { CardContent } from "@mui/material";
import { Swiper } from "swiper/react";

export const SwiperContainer = styled.div`
  font-size: 0.75rem;
  font-weight: 500;
  display: flex;
`;

export const TopMoversContainer = styled.div`
  background-color: #f5f6f9;
  padding: 1rem 0.8rem 1rem;
  h2 {
    font-size: 24px;
    margin-top: 0;
  }
  @media (min-width: 1440px) {
    margin: 0 auto;
    max-width: 1364px;
    padding: 1rem 0rem 1rem;
  }
`;

export const SwiperOptsStyled = styled.div`
  padding-bottom: 0.5rem;
`;

export const SwiperCustom = styled(Swiper)`
  padding-bottom: 1rem !important;
`;
export const CardContentStyled = styled(CardContent)`
  cursor: pointer;
`;

// card option

export const CardTop = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  padding-bottom: 0.5rem;
`;

export const CardAssetNameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 1440px) {
    flex-direction: row;
  }
`;
export const CardAssetName = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: bold;
  @media (min-width: 1440px) {
    margin-right: 0.5rem;
  }
`;
export const CardAssetRate = styled.div`
  font-weight: bold;
  padding-top: 0.5rem;
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const CardAssetRateDiff = styled.div`
  font-size: 14px;
  font-weight: bold;
`;
export const MinichartWrapper = styled.div`
  max-width: 100px;
  max-height: 10px;
  position: absolute;
  left: 65%;
  top: 0px;
`;

export const CardBottom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  font-size: 14px;
`;
