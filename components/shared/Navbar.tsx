import Link from "next/link";
import Image from "next/image";
import {
  NavStyle,
  MenuStyled,
  ButtonStyled,
  NavWrapperStyled,
} from "../../styles/navbar-styles";

export default function NavBar() {
  return (
    <NavWrapperStyled>
      <NavStyle>
        <ul>
          <li>
            <Link href="/price" passHref={true}>
              <div>
                <Image
                  src="/price-dark.svg"
                  alt="logo"
                  width={100}
                  height={40}
                />
              </div>
            </Link>
          </li>
        </ul>
        <MenuStyled>
          <ButtonStyled variant="contained" size="small">
            Sign up
          </ButtonStyled>
          <Image src="/search_black.svg" alt="search" width={24} height={24} />
          <Image src="/menu_black.svg" alt="menu" width={24} height={24} />
        </MenuStyled>
      </NavStyle>
    </NavWrapperStyled>
  );
}
