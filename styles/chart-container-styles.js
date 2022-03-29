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
`;
export const ChartContainerHeaderSectionRate = styled.div`
  font-size: 22px;
  margin-right: 1rem;
`;

export const ChartContainerFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 1rem;
  padding-bottom: 0;
`;
export const ChartContainerHeaderCol = styled.div`
  padding: 0.5rem 0rem;
  font-weight: bold;
`;

export const CellInfo = styled.div`
  padding: 1rem 0rem;
`;
export const CellInfoTitle = styled.div`
  font-size: 14px;
  padding-bottom: 0.2rem;
`;
export const CellInfoInfo = styled.div`
  font-size: 18px;
  font-weight: bold;
`;
