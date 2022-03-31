import {
  Link,
  Pagination,
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Dispatch, SetStateAction, useRef } from "react";

import { TableAssets } from "../../lib/models/Table-asset";
import StarOutlineIcon from "@mui/icons-material/StarOutline";

import Image from "next/image";
import {
  TableCellStyled,
  ThStyled,
  AssetNameStyled,
  AssetImageStyled,
  AssetDescStyled,
  MinichartWrapper,
  CellPriceStyled,
  ButtonStyled,
  PaginationWrapper,
  TableWrapperStyled,
  AssetDescStyledName,
  AssetDescStyledSymbol,
} from "../../styles/asset-table-styles";
import { useWindowSize } from "../../lib/hooks/useWindowSize";
import MiniChart from "./Mini-chart";
import { useModal } from "../../lib/hooks/useModal";
import { UiModal } from "../shared/UiModal";

export default function AssetTable(props: {
  data: TableAssets;
  pageNumber: number;
  setpageNumber: Dispatch<SetStateAction<number>>;
}) {
  const tableRef = useRef<HTMLDivElement>(document.createElement("div"));
  const size = useWindowSize();
  const [modalIsVisible, toggleModalVisibility] = useModal();

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    props.setpageNumber(value);
    if (tableRef !== null) {
      tableRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  const headCells = [{ label: " " }, { label: "NAME" }, { label: "PRICE" }];

  return (
    <TableWrapperStyled>
      <TableContainer
        component={Paper}
        elevation={0}
        ref={tableRef}
        sx={{
          height: "max-content",
        }}
      >
        <Table
          aria-label="simple table"
          sx={{
            height: "max-content",
          }}
        >
          <TableHead>
            <TableRow>
              <TableCellStyled style={{ width: "3%" }}> </TableCellStyled>
              {size.width > 1440 && (
                <TableCellStyled style={{ width: "5%" }}># </TableCellStyled>
              )}
              <TableCellStyled style={{ width: "20%" }}>
                <ThStyled>NAME</ThStyled>
              </TableCellStyled>
              <TableCellStyled align="right" style={{ width: "10%" }}>
                <ThStyled>PRICE</ThStyled>
              </TableCellStyled>
              {size.width > 1440 && (
                <TableCellStyled style={{ width: "10%" }}>
                  24H CHANGE{" "}
                </TableCellStyled>
              )}
              {size.width > 1440 && (
                <TableCellStyled style={{ width: "10%" }}>
                  24H VOLUME{" "}
                </TableCellStyled>
              )}
              {size.width > 1440 && (
                <TableCellStyled style={{ width: "10%" }}>
                  MARKET CAP
                </TableCellStyled>
              )}
              {size.width > 1440 && (
                <TableCellStyled style={{ width: "10%" }}>
                  7D CHART
                </TableCellStyled>
              )}
              <TableCellStyled style={{ width: "10%" }}> </TableCellStyled>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.data.data.map((row, index) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCellStyled>
                  <StarOutlineIcon sx={{ fontSize: 18 }} />
                </TableCellStyled>
                {size.width > 1440 && (
                  <TableCellStyled>{index + 1}</TableCellStyled>
                )}

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
                        <AssetDescStyledName> {row.name}</AssetDescStyledName>
                        <AssetDescStyledSymbol>
                          {" "}
                          {row.symbol}
                        </AssetDescStyledSymbol>
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
                    {size.width < 1440 && (
                      <CellPriceStyled>
                        {" "}
                        {(row.usd_price_change_24h * 100).toFixed(2)}%
                      </CellPriceStyled>
                    )}
                  </Link>
                </TableCellStyled>
                {size.width > 1440 && (
                  <TableCellStyled>
                    {(row.usd_price_change_24h * 100).toFixed(2)}%
                  </TableCellStyled>
                )}
                {size.width > 1440 && (
                  <TableCellStyled>
                    {(row.usd_volume_24h / 1000000000).toFixed(2)} B
                  </TableCellStyled>
                )}
                {size.width > 1440 && (
                  <TableCellStyled>
                    ${(row.usd_marketcap / 1000000000).toFixed(2)} B
                  </TableCellStyled>
                )}
                {size.width > 1440 && (
                  <TableCellStyled>
                    <MinichartWrapper>
                      <MiniChart prices={row.prices} />
                    </MinichartWrapper>
                  </TableCellStyled>
                )}
                <TableCellStyled>
                  <ButtonStyled
                    variant="contained"
                    size="small"
                    onClick={toggleModalVisibility}
                  >
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
      <UiModal
        isVisible={modalIsVisible}
        toggleVisibility={toggleModalVisibility}
      />
    </TableWrapperStyled>
  );
}
