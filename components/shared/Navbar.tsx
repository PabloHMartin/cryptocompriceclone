import Link from "next/link";
import styled from "@emotion/styled";
import Image from "next/image";
import Button from "@mui/material/Button";

const NavStyle = styled.nav`
  border-bottom: 1px solid #c9cfdd;
  padding: 0 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ul {
    display: flex;
    align-items: center;
    flex-direction: row;
    text-decoration: none;
    list-style-type: none;
    margin: 0;
    padding: 0;
    height: 3.5rem;
  }
`;

const MenuStyled = styled.div`
  display: flex;
  align-items: center;
  padding-right: 0.5rem;
`;

const ButtonStyled = styled(Button)`
  text-transform: none;
  background-color: #1199fa;
  margin-right: 1rem;
`;

export default function NavBar() {
  return (
    <NavStyle>
      <ul>
        <li>
          <Link href="/price" passHref={true}>
            <div>
              <Image src="/price-dark.svg" alt="logo" width={100} height={40} />
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
  );
}
