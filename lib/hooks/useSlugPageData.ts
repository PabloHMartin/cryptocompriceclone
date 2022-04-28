import { NextRouter } from "next/router";
import { useQuery } from "react-query";
import {
  fetchIcons,
  fetchSlug,
  fetchSlugPrices,
  fetchTokenInfo,
} from "../queries/queries";

export const useSlugPageData = (router: NextRouter) => {
  const { slug } = router.query;
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

  const { data: slugInfo } = useQuery(
    ["getSlug", slug],
    () => fetchSlug(slug),
    {
      refetchInterval: 8000,
      enabled: !!icons && !!slug,
      select: (data) => {
        if (icons) {
          data.icon = icons.get(data.symbol);
        }
        return data;
      },
    }
  );
  const {
    data: slugPrices,
    isLoading,
    isError,
  } = useQuery(["getSlugPrices", slug], () => fetchSlugPrices(slug), {
    refetchInterval: 8000,
    enabled: !!icons && !!slug,
  });

  const { data: TokenInfo } = useQuery(["getTokenInfo", slug], () =>
    fetchTokenInfo(slug)
  );

  return { icons, slugInfo, slugPrices, TokenInfo };
};
