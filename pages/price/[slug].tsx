import { useRouter } from "next/router";
import ChartContainer from "../../components/slug-details-components/Chart-container";
import Link from "next/link";
import { Breadcrumbs, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Footer from "../../components/shared/Footer";
import LoadingScreen from "../../components/shared/Loading-screen";
import {
  BreadcrumbStyle,
  LoadingScreenWrapper,
  MainWrapper,
  BreadcrumbWrapper,
} from "../../styles/slug-styles";
import { Usei18N } from "../../lib/context/i18n";
import { useSlugPageData } from "../../lib/hooks/useSlugPageData";
import { AssetHeader } from "../../components/slug-details-components/Asset-header";

export default function Slug() {
  const { t } = Usei18N();
  const router = useRouter();
  const { icons, slugInfo, slugPrices, TokenInfo } = useSlugPageData(router);

  const breadcrumbs = [
    <Link href="/price" passHref={true} key="2">
      <BreadcrumbStyle>{t("TOP_MOVERS")}</BreadcrumbStyle>
    </Link>,
    <Typography fontSize={"16px"} key="3" color="text.primary">
      <BreadcrumbStyle>{TokenInfo?.slug} price</BreadcrumbStyle>
    </Typography>,
  ];

  return (
    <>
      {slugInfo === undefined ||
      slugPrices === undefined ||
      icons === undefined ? (
        <LoadingScreenWrapper>
          <LoadingScreen />
        </LoadingScreenWrapper>
      ) : (
        <>
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
