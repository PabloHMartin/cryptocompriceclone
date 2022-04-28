import AssetTable from "../../components/price-components/Asset-table";
import TopMovers from "../../components/price-components/Top-movers";
import Footer from "../../components/shared/Footer";
import { MainWrapper, LoadingScreenWrapper } from "../../styles/price-styles";

import LoadingScreen from "../../components/shared/Loading-screen";
import { usePricePageData } from "../../lib/hooks/usePricePageData";

export default function PricePage() {
  const { pageNumber, setpageNumber, icons, topMovers, tableData } =
    usePricePageData();

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
