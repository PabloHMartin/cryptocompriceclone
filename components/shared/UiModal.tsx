import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import styled from "@emotion/styled";
import Avatar from "@mui/material/Avatar";
import Image from "next/image";
import Link from "next/link";
import ReactDOM from "react-dom";

type ModalProps = {
  isVisible: boolean;
  toggleVisibility: () => void;
};

const BoxStyled = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  background-color: #fff;
  padding: 1.5rem 1rem;
  box-shadow: 24px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    margin-top: 0.5rem;
  }

  @media (min-width: 1440px) {
    padding: 4rem;
    width: 40%;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  padding: 0 0.2rem;
  cursor: pointer;
`;
const ImageList = styled.div`
  display: flex;
`;

export const UiModal = ({
  isVisible,
  toggleVisibility,
}: Readonly<ModalProps>): JSX.Element | null => {
  const UiModal = (
    <>
      <div>
        <Modal
          disableScrollLock={true}
          open={isVisible}
          onClose={toggleVisibility}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <BoxStyled>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Thank you for visiting!
            </Typography>
            <Avatar
              alt="Remy Sharp"
              src="/avatar.jpg"
              sx={{ width: 100, height: 100 }}
            />
            <p>Pablo Hernández Martín</p>
            <p>
              Font End developer - JavaScript, Typescript, Angular, ReactJS,
              NodeJS, ES6.
            </p>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <p>This is a test project with NextJS.</p>
            </Typography>
            <ImageList>
              <ImageWrapper>
                <Link href="https://www.linkedin.com/in/pablohmartin/" passHref>
                  <Image
                    src="/rrss-icons/linkedin.svg"
                    alt="asset logo"
                    width={20}
                    height={20}
                  />
                </Link>
              </ImageWrapper>
              <ImageWrapper>
                <Link
                  href="https://github.com/PabloHMartin/cryptocompriceclone"
                  passHref
                >
                  <Image
                    src="/rrss-icons/github.svg"
                    alt="asset logo"
                    width={20}
                    height={20}
                  />
                </Link>
              </ImageWrapper>
            </ImageList>
          </BoxStyled>
        </Modal>
      </div>
    </>
  );

  return isVisible ? ReactDOM.createPortal(UiModal, document.body) : null;
};
