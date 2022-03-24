import styled from "@emotion/styled";
import Button from "@mui/material/Button";

export const NavStyle = styled.nav`
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