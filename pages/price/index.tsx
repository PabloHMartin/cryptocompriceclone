import React from "react";
import AssetTable from "../../components/price-components/Asset-table";
import Coinfilterbar from "../../components/price-components/Coinfilterbar";
import TopMovers from "../../components/price-components/Top-movers";
import GlobalMetrics from "../../components/shared/GlobalMetrics";
import NavBar from "../../components/shared/Navbar";

export default function PricePage() {
  return (
    <>
      <NavBar />
      <GlobalMetrics />
      <Coinfilterbar />
      <TopMovers />
      <AssetTable />
    </>
  );
}
