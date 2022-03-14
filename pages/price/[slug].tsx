import { useRouter } from "next/router";
import { useQuery } from "react-query";
import GlobalMetrics from "../../components/shared/GlobalMetrics";
import NavBar from "../../components/shared/Navbar";
import Chart from "../../components/slug-details-components/Chart";
import ChartContainer from "../../components/slug-details-components/Chart-container";
import {
  fetchSlug,
  fetchSlugPrices,
  fetchTokenInfo,
} from "../../lib/queries/queries";
import styled from "@emotion/styled";

const PageWrapper = styled.div`
  background-color: #f5f6f9;
`;

export default function Slug() {
  const router = useRouter();
  const { slug } = router.query;

  const { data: slugInfo } = useQuery(["getSlug", slug], () => fetchSlug(slug));
  const {
    data: slugPrices,
    isLoading,
    isError,
  } = useQuery(["getSlugPrices", slug], () => fetchSlugPrices(slug));

  const { data: TokenInfo } = useQuery(["getTokenInfo", slug], () =>
    fetchTokenInfo(slug)
  );

  console.log(slugInfo);
  console.log("slugPrices", slugPrices);
  return (
    <>
      <NavBar />
      <GlobalMetrics />
      <PageWrapper>
        <div>All prices - bitcoin</div>
        <div>(I) Bitcoin BTC</div>
        <div>(I) Add to Watchlist</div>
        {slugPrices && TokenInfo && (
          <ChartContainer data={slugPrices} tokenInfo={TokenInfo} />
        )}
      </PageWrapper>
    </>
  );
}
