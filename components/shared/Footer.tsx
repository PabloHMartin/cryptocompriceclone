import Image from "next/image";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  FooterStyled,
  ImageWrapper,
  TypographyStyled,
  IconsStyled,
  InfoStyled,
  CopyRight,
  CopyRightLinks,
} from "../../styles/footer-styles";

export default function Footer() {
  return (
    <FooterStyled>
      <ImageWrapper>
        <Image
          src="/cryptocom-full-dark.svg"
          alt="asset logo"
          width={150}
          height={30}
        />
      </ImageWrapper>
      <div>
        <Accordion
          elevation={0}
          style={{ padding: 0 }}
          sx={{
            "&:before": {
              display: "none",
            },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <TypographyStyled>Company</TypographyStyled>
          </AccordionSummary>
          <AccordionDetails>
            <TypographyStyled>About</TypographyStyled>
          </AccordionDetails>
        </Accordion>
        <Accordion
          elevation={0}
          sx={{
            "&:before": {
              display: "none",
            },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <TypographyStyled>Resources</TypographyStyled>
          </AccordionSummary>
          <AccordionDetails>
            <TypographyStyled>Site Widgets</TypographyStyled>
            <TypographyStyled>Support</TypographyStyled>
          </AccordionDetails>
        </Accordion>
      </div>
      <div>
        <IconsStyled>
          <Image
            src="/rrss-icons/twitter.svg"
            alt="asset logo"
            width={18}
            height={18}
          />
          <Image
            src="/rrss-icons/facebook.svg"
            alt="asset logo"
            width={18}
            height={18}
          />
          <Image
            src="/rrss-icons/instagram.svg"
            alt="asset logo"
            width={18}
            height={18}
          />
          <Image
            src="/rrss-icons/linkedin.svg"
            alt="asset logo"
            width={18}
            height={18}
          />
          <Image
            src="/rrss-icons/youtube.svg"
            alt="asset logo"
            width={18}
            height={18}
          />
          <Image
            src="/rrss-icons/twitter.svg"
            alt="asset logo"
            width={18}
            height={18}
          />
          <Image
            src="/rrss-icons/reddit.svg"
            alt="asset logo"
            width={18}
            height={18}
          />
          <Image
            src="/rrss-icons/discord.svg"
            alt="asset logo"
            width={18}
            height={18}
          />
          <Image
            src="/rrss-icons/telegram.svg"
            alt="asset logo"
            width={18}
            height={18}
          />
          <Image
            src="/rrss-icons/kakaotalk.svg"
            alt="asset logo"
            width={18}
            height={18}
          />
        </IconsStyled>
      </div>
      <InfoStyled>
        <p>
          The purpose of this website is solely to display information regarding
          the products and services available on the <span>Crypto.com</span>{" "}
          App. It is not intended to offer access to any of such products and
          services. You may obtain access to such products and services on the{" "}
          <span>Crypto.com</span> App.
        </p>
        <p>
          Please note that the availability of the products and services on the{" "}
          <span>Crypto.com</span> App is subject to jurisdictional limitations.{" "}
          <span>Crypto.com</span> may not offer certain products, features
          and/or services on the <span>Crypto.com</span> App in certain
          jurisdictions due to potential or actual regulatory restrictions.
        </p>
        <p>
          The brands and the logos appearing on this website are registered
          trademarks by their respective brand owners.
        </p>
        <p>
          While we endeavor to publish and maintain accurate information on
          external listings, we do not guarantee the accuracy, completeness, or
          usefulness of any information on this site, nor do we adopt nor
          endorse, nor are we responsible for, the accuracy or reliability of
          any information submitted by other parties. You hereby agree that we
          are not providing our own opinions, advice, or recommendations.
        </p>
      </InfoStyled>
      <CopyRight>
        <div>
          <p>Copyright © 2018 - 2022 Crypto.com. All rights reserved.</p>
        </div>
        <CopyRightLinks>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://crypto.com/privacy/global"
          >
            <div>
              <p>Privacy Notice</p>
            </div>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://status.crypto.com"
          >
            <div>
              <p>Status</p>
            </div>
          </a>
          <p>Cookie Preferences</p>
        </CopyRightLinks>
      </CopyRight>
    </FooterStyled>
  );
}
