import { useRouter } from "next/router";
import { useQuery } from "react-query";
import GlobalMetrics from "../../components/shared/GlobalMetrics";
import NavBar from "../../components/shared/Navbar";
import ChartContainer from "../../components/slug-details-components/Chart-container";
import {
  fetchIcons,
  fetchSlug,
  fetchSlugPrices,
  fetchTokenInfo,
} from "../../lib/queries/queries";
import styled from "@emotion/styled";
import { Breadcrumbs, Link, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import Image from "next/image";
import Footer from "../../components/shared/Footer";
import LoadingScreen from "../../components/shared/Loading-screen";
import {
  BreadcrumbStyle,
  LoadingScreenWrapper,
  MainWrapper,
  BreadcrumbWrapper,
  AssetTitleWrapper,
  AssetTitle,
  AssetTitleIcon,
  AssetTitleSlug,
  AssetTitleSymbol,
  WatchListWrapper,
  WatchListWrapperIcon,
  WatchListWrapperText,
} from "../../styles/slug-styles";
import { AssetInfo } from "../../lib/models/Slug-backend";
import { useModal } from "../../lib/hooks/useModal";
import { UiModal } from "../../components/shared/UiModal";

function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {}

export default function Slug() {
  const router = useRouter();
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

  const breadcrumbs = [
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/price"
      onClick={handleClick}
    >
      <BreadcrumbStyle>all prices</BreadcrumbStyle>
    </Link>,
    <Typography fontSize={"16px"} key="3" color="text.primary">
      <BreadcrumbStyle>{TokenInfo?.slug} price</BreadcrumbStyle>
    </Typography>,
  ];

  return (
    <>
      <NavBar />
      {slugInfo === undefined ||
      slugPrices === undefined ||
      icons === undefined ? (
        <LoadingScreenWrapper>
          <LoadingScreen />
        </LoadingScreenWrapper>
      ) : (
        <>
          <GlobalMetrics />
          <MainWrapper>
            <BreadcrumbWrapper>
              <Breadcrumbs
                separator={<NavigateNextIcon fontSize="small" />}
                aria-label="breadcrumb"
              >
                {breadcrumbs}
              </Breadcrumbs>
            </BreadcrumbWrapper>

            <AssetHeader slugInfo={slugInfo} />

            {slugPrices && TokenInfo && (
              <ChartContainer data={slugPrices} tokenInfo={TokenInfo} />
            )}
          </MainWrapper>
        </>
      )}

      <Footer />
    </>
  );
}

const AssetHeader = ({ slugInfo }: { slugInfo: AssetInfo }) => {
  const [modalIsVisible, toggleModalVisibility] = useModal();
  return (
    <AssetTitleWrapper>
      <AssetTitle>
        <AssetTitleIcon>
          {slugInfo?.icon ? (
            <Image
              src={slugInfo.icon}
              alt="asset logo"
              width={32}
              height={32}
            />
          ) : (
            <Image
              src="/color_icon.png"
              alt="asset logo"
              width={32}
              height={32}
            />
          )}
        </AssetTitleIcon>
        <AssetTitleSlug>{slugInfo?.slug}</AssetTitleSlug>
        <AssetTitleSymbol>{slugInfo?.symbol}</AssetTitleSymbol>
      </AssetTitle>
      <WatchListWrapper>
        <WatchListWrapperIcon>
          <StarOutlineIcon sx={{ fontSize: 18 }} />
        </WatchListWrapperIcon>
        <WatchListWrapperText onClick={toggleModalVisibility}>
          Add to Watchlist
        </WatchListWrapperText>
      </WatchListWrapper>
      <UiModal
        isVisible={modalIsVisible}
        toggleVisibility={toggleModalVisibility}
      />
    </AssetTitleWrapper>
  );
};
