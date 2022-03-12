import { useRouter } from "next/router";
import { useQuery } from "react-query";
import GlobalMetrics from "../../components/shared/GlobalMetrics";
import NavBar from "../../components/shared/Navbar";
import { fetchSlug } from "../../lib/queries/queries";

export default function Slug() {
  const router = useRouter();
  const { slug } = router.query;

  const { data, isLoading, isError } = useQuery(["getSlug", slug], () =>
    fetchSlug(slug)
  );

  console.log(data);
  console.log(slug);
  return (
    <>
      <NavBar />
      <GlobalMetrics />
    </>
  );
}
