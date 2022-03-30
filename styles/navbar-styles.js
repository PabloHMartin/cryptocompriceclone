import styled from "@emotion/styled";
import Button from "@mui/material/Button";
import Image from "next/image";

export const NavWrapperStyled = styled.div`
  border-bottom: 1px solid #c9cfdd;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: white;
  z-index: 9;
`;

export const NavStyle = styled.nav`
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
    li {
      cursor: pointer;
    }
  }
  @media (min-width: 1440px) {
    margin: 0 auto;
    max-width: 1364px;
    justify-content: flex-start;
  }
`;

export const MenuStyled = styled.div`
  display: flex;
  align-items: center;
  padding-right: 0.5rem;
`;

export const ButtonStyled = styled(Button)`
  text-transform: none;
  background-color: #1199fa;
  margin-right: 1rem;
`;

export const NavButtonDesktop = styled(Button)`
  text-transform: none;
  color: inherit;
  font-weight: 700;
  font-size: 14px;
  border-color: #0063cc;
  padding-inline-start: 0.75em;
  padding-inline-end: 0.75em;
  font-family: inherit;
`;
export const NavButtonDesktopAuth = styled(Button)``;
export const NavButtonDesktopLogin = styled(Button)`
  text-transform: none;
  color: #1199fa;
  font-weight: 700;
  font-size: 14px;
  padding-inline-start: 0.75em;
  padding-inline-end: 0.75em;
  font-family: inherit;
`;
export const NavButtonDesktopSignUp = styled(Button)`
  text-transform: none;
  color: white;
  font-weight: 700;
  font-size: 14px;
  background-color: #1199fa;
  padding-inline-start: 0.75em;
  padding-inline-end: 0.75em;
  font-family: inherit;
`;

export const NavButtonDesktopWrapper = styled.div`
  margin-left: 1rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
