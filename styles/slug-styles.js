import styled from "@emotion/styled";

export const MainWrapper = styled.main`
  padding: 1rem 0.5rem 4rem 0.5rem;
  background-color: #f5f6f9;
  font-family: BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, Helvetica, Arial,
    sans-serif;
`;

export const BreadcrumbWrapper = styled.div`
  margin-bottom: 0.5rem;
  @media (min-width: 1440px) {
    margin: 0 auto;
    max-width: 1364px;
  }
`;
export const BreadcrumbStyle = styled.span`
  text-transform: capitalize;
  font-size: 14px;
  color: "#C9CFDD";
  cursor: pointer;
`;
export const AssetTitleWrapper = styled.div`
  text-transform: capitalize;
  display: flex;
  flex-direction: column;
  @media (min-width: 1440px) {
    margin: 0 auto;
    max-width: 1364px;
  }
`;
export const AssetTitle = styled.div`
  text-transform: capitalize;
  display: flex;
  align-items: center;
  margin: 0.5rem 0;
`;
export const AssetTitleIcon = styled.div`
  margin-right: 8px;
`;
export const AssetTitleSlug = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-right: 8px;
`;
export const AssetTitleSymbol = styled.div`
  padding-top: 6px;
  font-size: 14px;
`;
export const WatchListWrapper = styled.div`
  display: flex;
  align-items: flex-start;
`;
export const WatchListWrapperIcon = styled.div`
  padding-top: 2px;
`;
export const WatchListWrapperText = styled.div`
  font-size: 16px;
  margin-left: 0.5rem;
`;

export const LoadingScreenWrapper = styled.main`
  height: 80vh;
  text-align: center;
`;
