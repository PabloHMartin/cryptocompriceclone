import styled from "@emotion/styled";

export const ChartContainerStyled = styled.div`
  background-color: #fff;
  margin: 1rem 0rem;
  padding: 1rem;
  padding-bottom: 0;
  @media (min-width: 1440px) {
    margin: 1rem auto;
    max-width: 1364px;
  }
`;
export const ChartContainerHeader = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;
export const ChartContainerHeaderSection = styled.div`
  display: flex;
  align-items: baseline;
  margin-bottom: 0.5rem;
  div {
    cursor: pointer;
  }
  @media (min-width: 1440px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
export const ChartContainerHeaderSectionIcons = styled.div`
  display: flex;
  align-items: baseline;
  margin-bottom: 0.5rem;
  div:last-child {
    margin-left: 0.5rem;
    cursor: pointer;
  }
  @media (min-width: 1440px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
export const ChartContainerHeaderSectionSub = styled.div`
  display: flex;
  align-items: baseline;
  margin-bottom: 0.5rem;
  @media (min-width: 1440px) {
    flex-direction: row;
  }
`;

export const ChartContainerHeaderSectionPercentSub = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (min-width: 1440px) {
    font-size: 16px;
    margin-right: 0.5rem;
    span {
      margin-left: 0.5rem;
      font-size: 13px;
    }
  }
`;

export const ChartContainerHeaderSectionDesktop = styled.div`
  display: flex;
  align-items: baseline;
  margin-bottom: 0.5rem;
  div {
    margin: 0 0.5rem;
    cursor: pointer;
  }
  @media (min-width: 1440px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
export const ChartContainerHeaderSectionRate = styled.div`
  font-size: 22px;
  margin-right: 1rem;
  @media (min-width: 1440px) {
    font-size: 32px;
  }
`;
export const ChartContainerHeaderSectionRateAndPercent = styled.div`
  display: flex;
  align-items: baseline;
`;

export const ChartContainerHeaderSectionPercent = styled.div`
  @media (min-width: 1440px) {
    font-size: 24px;
    span {
      font-size: 18px;
    }
  }
`;

export const ChartContainerFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 1rem;
  padding-bottom: 0;
  @media (min-width: 1440px) {
    justify-content: flex-start;
  }
`;
export const ChartContainerHeaderCol = styled.div`
  padding: 0.5rem 0rem;
  font-weight: bold;
  @media (min-width: 1440px) {
    display: flex;
  }
`;

export const CellInfo = styled.div`
  padding: 1rem 0rem;
  @media (min-width: 1440px) {
    padding: 1rem;
  }
`;
export const CellInfoTitle = styled.div`
  font-size: 14px;
  padding-bottom: 0.2rem;
  @media (min-width: 1440px) {
    font-size: 14px;
    color: #5d667b;
    font-weight: 400;
  }
`;
export const CellInfoInfo = styled.div`
  font-size: 18px;
  font-weight: bold;
  @media (min-width: 1440px) {
    font-size: 20px;
    font-weight: 600;
  }
`;
