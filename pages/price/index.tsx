import React, { useState } from "react";
import { useQuery } from "react-query";
import AssetTable from "../../components/price-components/Asset-table";
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
import { MainWrapper, LoadingScreenWrapper } from "../../styles/price-styles";

import LoadingScreen from "../../components/shared/Loading-screen";

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
      {/* <Coinfilterbar /> */}
      {tableData === undefined ||
      topMovers?.length === undefined ||
      icons === undefined ? (
        <LoadingScreenWrapper>
          <LoadingScreen />
        </LoadingScreenWrapper>
      ) : (
        <>
          <MainWrapper>
            <TopMovers topMovers={topMovers} />
            <AssetTable
              data={tableData}
              pageNumber={pageNumber}
              setpageNumber={setpageNumber}
            />
          </MainWrapper>
        </>
      )}

      <Footer />
    </>
  );
}
