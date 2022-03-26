import styled from "@emotion/styled";
import Button from "@mui/material/Button";

export const NavWrapperStyled = styled.div`
  border-bottom: 1px solid #c9cfdd;
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
  }
  @media (min-width: 1440px) {
    margin: 0 auto;
    max-width: 1364px;
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
