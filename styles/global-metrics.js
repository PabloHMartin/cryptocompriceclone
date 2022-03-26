import styled from "@emotion/styled";

export const GlobalmetricsStyleWrapper = styled.div`
  border-bottom: 1px solid #c9cfdd;
`;
export const GlobalmetricsStyle = styled.div`
  display: flex;
  overflow: scroll;
  padding: 0.5rem;
  @media (min-width: 1440px) {
    margin: 0 auto;
    max-width: 1364px;
  }
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const MetricStyle = styled.div`
  font-size: 0.75rem;
  font-weight: 500;
  margin-right: 16px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  @media (min-width: 1440px) {
    flex-direction: row;
    align-items: center;
    padding: 16px 0;
  }
`;
export const MetricStyleTitle = styled.div`
  font-weight: 500;
  color: #5d667b;
  margin-right: 16px;
  font-family: BlinkMacSystemFont, -apple-system, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", Helvetica,
    Arial, sans-serif;
  @media (min-width: 1440px) {
    margin-right: 6px;
    &::after {
      content: ":";
    }
  }
`;
export const MetricStyleInfo = styled.div`
  margin-top: 3px;
  font-weight: bold;
  white-space: nowrap;
  @media (min-width: 1440px) {
    flex-direction: row;
    align-items: center;
    margin-top: 0px;
  }
`;
