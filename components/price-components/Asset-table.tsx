import {
  Link,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
} from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { TableAssets } from "../../lib/models/Table-asset";

export default function AssetTable(props: {
  data: TableAssets;
  pageNumber: number;
  setpageNumber: Dispatch<SetStateAction<number>>;
}) {
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
      <div>
        <button
          onClick={() => props.setpageNumber(props.pageNumber - 1)}
          disabled={props.pageNumber === 1}
        >
          Prev
        </button>
        <button
          onClick={() => props.setpageNumber(props.pageNumber + 1)}
          disabled={props.pageNumber === 50}
        >
          Next
        </button>
      </div>
    </>
  );
}
