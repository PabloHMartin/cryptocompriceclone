import {
  Link,
  Pagination,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Dispatch, SetStateAction, useRef, useState } from "react";
import styled from "styled-components";
import { TableAssets } from "../../lib/models/Table-asset";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import Button from "@mui/material/Button";
import Image from "next/image";

const PaginationWrapper = styled.div`
  font-family: BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, Helvetica, Arial,
    sans-serif;
  padding-top: 2rem;
  display: flex;
  justify-content: center;
`;

const TableCellStyled = styled(TableCell)`
  font-family: BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, Helvetica, Arial,
    sans-serif;
`;
const ThStyled = styled.div`
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
`;

const ButtonStyled = styled(Button)`
  text-transform: none;
  background-color: #1199fa;
  border-radius: 20px;
`;

const AssetNameStyled = styled.div`
  display: flex;
  align-items: center;
`;

const AssetImageStyled = styled.div`
  margin-right: 0.5rem;
`;
const AssetDescStyled = styled.div`
  font-size: 12px;
`;
const CellPriceStyled = styled.div`
  font-size: 12px;
  font-weight: 600;
`;

export default function AssetTable(props: {
  data: TableAssets;
  pageNumber: number;
  setpageNumber: Dispatch<SetStateAction<number>>;
}) {
  const tableRef = useRef<HTMLDivElement>(document.createElement("div"));

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    props.setpageNumber(value);
    if (tableRef !== null) {
      tableRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  const headCells = [{ label: " " }, { label: "NAME" }, { label: "PRICE" }];

  return (
    <>
      <TableContainer component={Paper} ref={tableRef}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCellStyled> </TableCellStyled>
              <TableCellStyled>
                <ThStyled>NAME</ThStyled>
              </TableCellStyled>
              <TableCellStyled align="right">
                <ThStyled>PRICE</ThStyled>
              </TableCellStyled>
              <TableCellStyled> </TableCellStyled>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.data.data.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCellStyled>
                  <StarOutlineIcon sx={{ fontSize: 18 }} />
                </TableCellStyled>
                <TableCellStyled component="th" scope="row">
                  <Link
                    style={{ textDecoration: "none", color: "#0B1426" }}
                    href={"price/" + row.slug}
                  >
                    <AssetNameStyled>
                      <AssetImageStyled>
                        {row.icon ? (
                          <Image
                            src={row.icon}
                            alt="asset logo"
                            width={22}
                            height={22}
                          />
                        ) : (
                          <Image
                            src="/color_icon.png"
                            alt="asset logo"
                            width={22}
                            height={22}
                          />
                        )}
                      </AssetImageStyled>
                      <AssetDescStyled>
                        <div> {row.name}</div>
                        <div> {row.symbol}</div>
                      </AssetDescStyled>
                    </AssetNameStyled>
                  </Link>
                </TableCellStyled>
                <TableCellStyled align="right">
                  <Link
                    href={"price/" + row.slug}
                    style={{ textDecoration: "none", color: "#0B1426" }}
                  >
                    <CellPriceStyled>
                      {" "}
                      ${row.usd_price.toFixed(2)}{" "}
                    </CellPriceStyled>
                    <CellPriceStyled>
                      {" "}
                      {(row.usd_price_change_24h * 100).toFixed(2)}%
                    </CellPriceStyled>
                  </Link>
                </TableCellStyled>
                <TableCellStyled>
                  <ButtonStyled variant="contained" size="small">
                    Trade
                  </ButtonStyled>
                </TableCellStyled>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <PaginationWrapper>
        <Pagination
          color="primary"
          onChange={handleChange}
          count={Math.round(props.data.total / 50)}
          shape="rounded"
        />
      </PaginationWrapper>
    </>
  );
}
