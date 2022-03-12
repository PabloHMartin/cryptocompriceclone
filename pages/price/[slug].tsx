import { useRouter } from "next/router";
import { useQuery } from "react-query";
import GlobalMetrics from "../../components/shared/GlobalMetrics";
import NavBar from "../../components/shared/Navbar";
import { fetchSlug, fetchSlugPrices } from "../../lib/queries/queries";

export default function Slug() {
  const router = useRouter();
  const { slug } = router.query;

  const { data: slugInfo } = useQuery(["getSlug", slug], () => fetchSlug(slug));
  const {
    data: slugPrices,
    isLoading,
    isError,
  } = useQuery(["getSlugPrices", slug], () => fetchSlugPrices(slug));

  console.log(slugInfo);
  console.log("slugPrices", slugPrices);
  return (
    <>
      <NavBar />
      <GlobalMetrics />
      {slugInfo?.slug}
    </>
  );
}
