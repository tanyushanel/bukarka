import { useState } from "react";
import { Link } from "react-router-dom";
import {
  // BurgerIcon,
  ButtonWrapper,
  CatalogButton,
  FormButton,
  Input,
  StyledForm,
  StyledHeader,
  StyledLogoUkr,
  Wrapper,
} from "./Header.styled";
import Catalog from "components/Catalog";
import { BurgerIcon } from "assets/icons";
import Modal from "components/Modal";
import { StyledCommonWrapper } from "styles/CommonStyled";
import UserMenu from "components/UserMenu";

const Header: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <StyledCommonWrapper>
        <StyledHeader>
          <Wrapper>
            <Link to="/">
              <StyledLogoUkr />
            </Link>
            {/* <ButtonWrapper>
              <CatalogButton onClick={toggleModal}>
                <BurgerIcon />
                Каталог
              </CatalogButton>
            </ButtonWrapper>
            <StyledForm>
              <Input type="text" value="" />
              <FormButton>Знайти</FormButton>
            </StyledForm> */}
            {/* <UserMenu /> */}
          </Wrapper>
        </StyledHeader>
      </StyledCommonWrapper>
      {isModalOpen && (
        <Modal close={closeModal} showCloseButton={false} animation="slide">
          <Catalog />
        </Modal>
      )}
    </>
  );
};

export default Header;
