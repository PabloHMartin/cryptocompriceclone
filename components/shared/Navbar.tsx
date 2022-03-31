import Link from "next/link";
import Image from "next/image";
import {
  NavStyle,
  MenuStyled,
  ButtonStyled,
  NavWrapperStyled,
  NavButtonDesktop,
  NavButtonDesktopWrapper,
  NavButtonDesktopLogin,
  NavButtonDesktopSignUp,
} from "../../styles/navbar-styles";
import { useWindowSize } from "../../lib/hooks/useWindowSize";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useModal } from "../../lib/hooks/useModal";
import { UiModal } from "./UiModal";

export default function NavBar() {
  const size = useWindowSize();
  const [modalIsVisible, toggleModalVisibility] = useModal();

  return (
    <NavWrapperStyled>
      <UiModal
        isVisible={modalIsVisible}
        toggleVisibility={toggleModalVisibility}
      />
      <NavStyle>
        <ul>
          <li>
            <Link href="/price" passHref={true}>
              <div>
                {size.width > 1440 ? (
                  <Image
                    src={
                      size.width > 1440
                        ? "/price-full-dark.svg"
                        : "/price-dark.svg"
                    }
                    alt="logo big"
                    width={size.width > 1440 ? 250 : 100}
                    height={40}
                  />
                ) : (
                  <Image
                    src="/price-dark.svg"
                    alt="logo"
                    width={100}
                    height={40}
                  />
                )}
              </div>
            </Link>
          </li>
        </ul>
        {size.width > 1440 ? (
          <DesktopOptions />
        ) : (
          <MenuStyled>
            <ButtonStyled
              variant="contained"
              size="small"
              onClick={toggleModalVisibility}
            >
              Sign up
            </ButtonStyled>
            <Image
              src="/search_black.svg"
              alt="search"
              width={24}
              height={24}
              onClick={toggleModalVisibility}
            />
            <Image src="/menu_black.svg" alt="menu" width={24} height={24} />
          </MenuStyled>
        )}
      </NavStyle>
    </NavWrapperStyled>
  );
}

function DesktopOptions() {
  const [modalIsVisible, toggleModalVisibility] = useModal();
  return (
    <NavButtonDesktopWrapper>
      <div>
        <NavButtonDesktop variant="text" onClick={toggleModalVisibility}>
          Coins <KeyboardArrowDownIcon />
        </NavButtonDesktop>
        <NavButtonDesktop variant="text" onClick={toggleModalVisibility}>
          NFT <KeyboardArrowDownIcon />
        </NavButtonDesktop>
      </div>
      <div>
        <NavButtonDesktopLogin variant="text" onClick={toggleModalVisibility}>
          Log In
        </NavButtonDesktopLogin>
        <NavButtonDesktopSignUp
          disableElevation
          variant="contained"
          onClick={toggleModalVisibility}
        >
          Sign Up
        </NavButtonDesktopSignUp>
      </div>

      <UiModal
        isVisible={modalIsVisible}
        toggleVisibility={toggleModalVisibility}
      />
    </NavButtonDesktopWrapper>
  );
}
