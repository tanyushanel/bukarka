import { useCallback, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

import Cart from "components/Cart";
import FavoriteButton from "components/FavoriteButton/";
import Modal from "components/Modal";
import useCart from "hooks/useCart";
import { useOrderContext } from "components/Order/OrderContext";
import { truncateString } from "utils/truncateString";
import { images } from "assets/images";
import theme from "styles/theme";
import {
  ButtonOrange,
  ButtonYellow,
  TextCenter,
  Wrapper,
} from "styles/CommonStyled";
import {
  StyledButtonContainer,
  StyledFavoriteButton,
  StyledItemCard,
  StyledItemImage,
  StyledNameAuthor,
  StyledPrice,
  StyledStarsWrapper,
  StyledTitle,
} from "./CatalogBookCard.styled";
import { StyledStarIcon } from "components/BookRating/BookRating.styled";

interface IProps {
  _id: string;
  title: string;
  author: string;
  image: string | null;
  price: number;
  rating: number;
  index: number;
}

const BookCard: React.FC<IProps> = ({
  _id,
  title,
  author,
  image,
  price,
  rating,
}) => {
  let navigate = useNavigate();
  const { handleCart } = useCart(_id);
  const { isBookAdded, markBookAsAdded } = useOrderContext();

  const { colors } = theme;

  const starsProps = useMemo(
    () => ({
      size: 20,
      count: 5,
      edit: false,
      color: colors.background.primary,
      activeColor: "#ffd700",
      emptyIcon: <StyledStarIcon $fillColor={colors.background.primary} />,
      filledIcon: <StyledStarIcon $fillColor={colors.accent.yellow} />,
    }),
    []
  );

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<string>("");

  const showModal = (content: string, img?: string) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setModalContent("");
    setIsModalOpen(false);
  };

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const target = e.currentTarget as HTMLDivElement;
      navigate(`/books/${target.id}`);
    },
    [navigate]
  );

  const handleBuy = useCallback(async () => {
    if (isBookAdded[_id]) {
      showModal("isBookAdded");
      return;
    }

    await handleCart();
    markBookAsAdded(_id);
    showModal("cart");
  }, [_id, handleCart, isBookAdded, markBookAsAdded]);

  const handleAddToCart = useCallback(async () => {
    if (isBookAdded[_id]) {
      showModal("isBookAdded");
      return;
    }

    await handleCart();
    markBookAsAdded(_id);
    showModal("cart");
  }, [_id, handleCart, isBookAdded, markBookAsAdded]);

  return (
    <>
      <StyledItemCard>
        <StyledFavoriteButton>
          <FavoriteButton itemId={_id} />
        </StyledFavoriteButton>

        <StyledItemImage id={_id} onClick={handleClick}>
          <img
            src={image || images.imagePlaceholder}
            alt={`${author} ${title} `}
            onError={(e) => {
              (e.target as HTMLImageElement).src = images.imagePlaceholder;
            }}
          />
        </StyledItemImage>

        <StyledTitle style={{ width: "192px" }}>
          <div
            id={_id}
            onClick={handleClick}
            title={`${title.length > 25 ? title : ""}`}
          >
            {truncateString(title, 25)}
          </div>
        </StyledTitle>

        <StyledNameAuthor>
          <div title={`${author.length > 25 ? author : ""}`}>
            {truncateString(author, 25)}
          </div>
        </StyledNameAuthor>

        <StyledStarsWrapper>
          <ReactStars {...starsProps} value={rating} />
        </StyledStarsWrapper>

        <StyledPrice>{price} грн</StyledPrice>

        <StyledButtonContainer>
          <ButtonOrange onClick={handleBuy}>Купити</ButtonOrange>
          <ButtonYellow onClick={handleAddToCart}>До кошика</ButtonYellow>
        </StyledButtonContainer>

        {isModalOpen && (
          <Modal close={closeModal} showCloseButton={true}>
            {modalContent === "isBookAdded" && (
              <Wrapper>
                <TextCenter>Книга вже є в кошику!</TextCenter>
              </Wrapper>
            )}
            {modalContent === "cart" && <Cart closeCart={closeModal} />}
          </Modal>
        )}
      </StyledItemCard>
    </>
  );
};

export default BookCard;
