import React from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import AssetTable from "../../components/price-components/Asset-table";
import Coinfilterbar from "../../components/price-components/Coinfilterbar";
import TopMovers from "../../components/price-components/Top-movers";
import GlobalMetrics from "../../components/shared/GlobalMetrics";
import NavBar from "../../components/shared/Navbar";
import { TopMover } from "../../lib/models/Top-mover";
import { fetchTopMovers } from "../../lib/queries/queries";

export default function PricePage() {
  const {
    data: topMovers,
    isLoading,
    isError,
  } = useQuery<TopMover[]>("topMovers", fetchTopMovers);

  return (
    <>
      <NavBar />
      <GlobalMetrics />
      <Coinfilterbar />
      {topMovers && <TopMovers topMovers={topMovers} />}
      <AssetTable />
    </>
  );
}
