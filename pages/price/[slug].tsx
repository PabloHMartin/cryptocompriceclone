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

const MainWrapper = styled.main`
  padding: 1rem 0.5rem 4rem 0.5rem;
  background-color: #f5f6f9;
  font-family: BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, Helvetica, Arial,
    sans-serif;
`;

const BreadcrumbWrapper = styled.div`
  margin-bottom: 0.5rem;
`;
const BreadcrumbStyle = styled.span`
  text-transform: capitalize;
  font-size: 14px;
  color: "#C9CFDD";
  cursor: pointer;
`;
const AssetTitleWrapper = styled.div`
  text-transform: capitalize;
  display: flex;
  flex-direction: column;
`;
const AssetTitle = styled.div`
  text-transform: capitalize;
  display: flex;
  align-items: center;
  margin: 0.5rem 0;
`;
const AssetTitleIcon = styled.div`
  margin-right: 8px;
`;
const AssetTitleSlug = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-right: 8px;
`;
const AssetTitleSymbol = styled.div`
  padding-top: 6px;
  font-size: 14px;
`;
const WatchListWrapper = styled.div`
  display: flex;
  align-items: flex-start;
`;
const WatchListWrapperIcon = styled.div`
  padding-top: 2px;
`;
const WatchListWrapperText = styled.div`
  font-size: 16px;
  margin-left: 0.5rem;
`;

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
            <WatchListWrapperText>Add to Watchlist</WatchListWrapperText>
          </WatchListWrapper>
        </AssetTitleWrapper>

        {slugPrices && TokenInfo && (
          <ChartContainer data={slugPrices} tokenInfo={TokenInfo} />
        )}
      </MainWrapper>
      <Footer />
    </>
  );
}
