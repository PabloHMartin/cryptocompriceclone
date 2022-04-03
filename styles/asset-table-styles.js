import styled from "styled-components";
import Button from "@mui/material/Button";
import { TableCell } from "@mui/material";

export const TableWrapperStyled = styled.div`
  @media (min-width: 1440px) {
    margin: 0 auto;
    max-width: 1364px;
  }
`;

export const PaginationWrapper = styled.div`
  font-family: BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, Helvetica, Arial,
    sans-serif;
  padding-top: 2rem;
  display: flex;
  justify-content: center;
  @media (min-width: 1440px) {
    justify-content: flex-end;
  }
`;

export const TableCellStyled = styled(TableCell)`
  font-family: BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, Helvetica, Arial,
    sans-serif;
  font-weight: bold;
  font-size: 12px;
  text-transform: uppercase;
`;
export const ThStyled = styled.div`
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
`;

export const ButtonStyled = styled(Button)`
  text-transform: none;
  background-color: #1199fa;
  border-radius: 20px;
  text-transform: capitalize;
`;

export const AssetNameStyled = styled.div`
  display: flex;
  align-items: center;
`;
export const MinichartWrapper = styled.div`
  max-width: 100px;
  max-height: 55px;
  position: relative;
  top: -15px;
  overflow: hidden;
`;
export const AssetImageStyled = styled.div`
  margin-right: 0.5rem;
`;
export const AssetDescStyled = styled.div`
  font-size: 12px;
  @media (min-width: 1440px) {
    font-size: 14px;
  }
`;
export const AssetDescStyledName = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: #0b1426;
  @media (min-width: 1440px) {
    font-size: 14px;
  }
`;
export const AssetDescStyledSymbol = styled.div`
  font-size: 12px;
  color: #5d667b;
  @media (min-width: 1440px) {
    font-size: 14px;
    font-weight: bold;
  }
`;

export const CellPriceStyled = styled.div`
  font-size: 12px;
  font-weight: 600;
  @media (min-width: 1440px) {
    font-size: 14px;
  }
`;
