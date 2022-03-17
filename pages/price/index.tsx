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
import {
  fetchIcons,
  fetchTableAssets,
  fetchTopMovers,
} from "../../lib/queries/queries";
import styled from "@emotion/styled";

const MainWrapper = styled.main`
  padding: 1rem 0rem 2rem;
  background-color: #f5f6f9;
`;

export default function PricePage() {
  const [pageNumber, setpageNumber] = useState(1);

  const { data: icons } = useQuery("icons", fetchIcons, {
    staleTime: 10000000,
    refetchOnWindowFocus: false,
    keepPreviousData: true,
    select: (data) => {
      return new Map<string, string>(
        data.map(
          (icon: { asset_id: string; url: string }) =>
            [icon.asset_id, icon.url] as [string, string]
        )
      );
    },
  });

  const {
    data: topMovers,
    isLoading,
    isError,
  } = useQuery<TopMover[]>("topMovers", fetchTopMovers, {
    refetchInterval: 8000,
    enabled: !!icons,
    select: (data) => {
      data.map((mover) => {
        if (icons) {
          mover.icon = icons.get(mover.symbol);
        }
        return mover;
      });
      return data;
    },
  });

  const { data: tableData } = useQuery<TableAssets>(
    ["tableAssets", pageNumber],
    () => fetchTableAssets(pageNumber),
    {
      keepPreviousData: true,
      refetchInterval: 8000,
      enabled: !!icons,
      select: (data) => {
        data.data.map((asset) => {
          if (icons) {
            asset.icon = icons.get(asset.symbol);
          }
          return asset;
        });
        return data;
      },
    }
  );

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
