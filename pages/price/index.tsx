import React, { useState } from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import AssetTable from "../../components/price-components/Asset-table";
import Coinfilterbar from "../../components/price-components/Coinfilterbar";
import TopMovers from "../../components/price-components/Top-movers";
import Footer from "../../components/shared/Footer";
import GlobalMetrics from "../../components/shared/GlobalMetrics";
import NavBar from "../../components/shared/Navbar";
import { TableAssets } from "../../lib/models/Table-asset";
import { TopMover } from "../../lib/models/Top-mover";
import { fetchTableAssets, fetchTopMovers } from "../../lib/queries/queries";
import styled from "@emotion/styled";

const MainWrapper = styled.main`
  padding: 1rem 0rem 4rem;
  background-color: #f5f6f9;
`;

export default function PricePage() {
  const [pageNumber, setpageNumber] = useState(1);
  const {
    data: topMovers,
    isLoading,
    isError,
  } = useQuery<TopMover[]>("topMovers", fetchTopMovers);

  const { data: tableData } = useQuery<TableAssets>(
    ["tableAssets", pageNumber],
    () => fetchTableAssets(pageNumber),
    {
      keepPreviousData: true,
    }
  );

  console.log(tableData);

  return (
    <>
      <NavBar />
      <GlobalMetrics />
      {/* <Coinfilterbar /> */}
      <MainWrapper>
        {topMovers && <TopMovers topMovers={topMovers} />}
        {tableData && (
          <AssetTable
            data={tableData}
            pageNumber={pageNumber}
            setpageNumber={setpageNumber}
          />
        )}
      </MainWrapper>
      <Footer />
    </>
  );
}
