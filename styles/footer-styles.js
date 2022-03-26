import styled from "@emotion/styled";
import Typography from "@mui/material/Typography";

export const IconsStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  max-width: 50%;
  padding: 2rem 0rem;
  grid-gap: 1.1rem;
`;

export const FooterStyled = styled.footer`
  padding: 2.5rem 0.5rem;
  @media (min-width: 1440px) {
    margin: 0 auto;
    max-width: 1364px;
  }
`;
export const ImageWrapper = styled.div`
  margin-bottom: 2.5rem;
`;
export const InfoStyled = styled.div`
  font-size: 0.875rem;
  color: "#5D667B";
`;
export const CopyRight = styled.div`
  font-size: 12px;
  color: "#5D667B";
`;
export const CopyRightLinks = styled.div`
  display: flex;
  font-size: 12px;
  color: "#5D667B";
  p {
    margin: 0;
    padding: 0rem 0.5rem;
    padding-left: 0;
  }
  a {
    border-right: 1px solid lightgrey;
  }
`;
export const TypographyStyled = styled(Typography)`
  font-weight: bold;
`;
