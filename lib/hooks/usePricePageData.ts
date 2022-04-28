import { useState } from "react";
import { useQuery } from "react-query";
import { TableAssets } from "../models/Table-asset";
import { TopMover } from "../models/Top-mover";
import {
  fetchIcons,
  fetchTableAssets,
  fetchTopMovers,
} from "../queries/queries";

export const usePricePageData = () => {
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

  return { pageNumber, setpageNumber, icons, topMovers, tableData };
};
