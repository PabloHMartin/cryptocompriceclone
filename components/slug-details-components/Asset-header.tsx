import { Usei18N } from "../../lib/context/i18n";
import { useModal } from "../../lib/hooks/useModal";
import { AssetInfo } from "../../lib/models/Slug-backend";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import {
  AssetTitle,
  AssetTitleIcon,
  AssetTitleSlug,
  AssetTitleSymbol,
  AssetTitleWrapper,
  WatchListWrapper,
  WatchListWrapperIcon,
  WatchListWrapperText,
} from "../../styles/slug-styles";
import { UiModal } from "../shared/UiModal";
import Image from "next/image";

export const AssetHeader = ({ slugInfo }: { slugInfo: AssetInfo }) => {
  const { t } = Usei18N();
  const [modalIsVisible, toggleModalVisibility] = useModal();
  return (
    <AssetTitleWrapper>
      <AssetTitle>
        <AssetTitleIcon>
          {slugInfo?.icon ? (
            // eslint-disable-next-line react/jsx-no-undef
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
          {t("ADD_TO_WATCHLIST")}
        </WatchListWrapperText>
      </WatchListWrapper>
      <UiModal
        isVisible={modalIsVisible}
        toggleVisibility={toggleModalVisibility}
      />
    </AssetTitleWrapper>
  );
};
