import React, { useState } from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import AssetTable from "../../components/price-components/Asset-table";
import Coinfilterbar from "../../components/price-components/Coinfilterbar";
import TopMovers from "../../components/price-components/Top-movers";
import GlobalMetrics from "../../components/shared/GlobalMetrics";
import NavBar from "../../components/shared/Navbar";
import { TableAssets } from "../../lib/models/Table-asset";
import { TopMover } from "../../lib/models/Top-mover";
import { fetchTableAssets, fetchTopMovers } from "../../lib/queries/queries";

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
      <Coinfilterbar />
      {topMovers && <TopMovers topMovers={topMovers} />}
      {tableData && (
        <AssetTable
          data={tableData}
          pageNumber={pageNumber}
          setpageNumber={setpageNumber}
        />
      )}
    </>
  );
}
