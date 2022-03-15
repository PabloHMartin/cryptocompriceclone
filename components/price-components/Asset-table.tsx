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
  TableSortLabel,
} from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";
import styled from "styled-components";
import { TableAssets } from "../../lib/models/Table-asset";

const PaginationWrapper = styled.div`
  padding-top: 2rem;
  display: flex;
  justify-content: center;
`;

export default function AssetTable(props: {
  data: TableAssets;
  pageNumber: number;
  setpageNumber: Dispatch<SetStateAction<number>>;
}) {
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    props.setpageNumber(value);
  };
  const headCells = [{ label: " " }, { label: "NAME" }, { label: "PRICE" }];

  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>NAME</TableCell>
              <TableCell align="right">PRICE</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.data.data.map((row) => (
              <TableRow
                component={Link}
                href={"price/" + row.slug}
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.usd_price}</TableCell>
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
