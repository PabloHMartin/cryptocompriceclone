import styled from "styled-components";
import Button from "@mui/material/Button";
import { TableCell } from "@mui/material";

export const PaginationWrapper = styled.div`
  font-family: BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, Helvetica, Arial,
    sans-serif;
  padding-top: 2rem;
  display: flex;
  justify-content: center;
`;

export const TableCellStyled = styled(TableCell)`
  font-family: BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, Helvetica, Arial,
    sans-serif;
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
`;

export const AssetNameStyled = styled.div`
  display: flex;
  align-items: center;
`;

export const AssetImageStyled = styled.div`
  margin-right: 0.5rem;
`;
export const AssetDescStyled = styled.div`
  font-size: 12px;
`;
export const CellPriceStyled = styled.div`
  font-size: 12px;
  font-weight: 600;
`;
