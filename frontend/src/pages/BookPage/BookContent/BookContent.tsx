import { images } from "assets/images";
import { IBookItem } from "components/Book";
import { FlexContainer } from "styles/CommonStyled";
import { StyledBookDescription, StyledBookImage } from "./BookContent.styled";
import BookRating from "components/BookRating";

interface IBookContentProps {
  book: IBookItem;
}

const BookContent: React.FC<IBookContentProps> = ({ book }) => {
  return (
    <FlexContainer>
      {!!book && (
        <>
          <StyledBookImage id={book._id}>
            <img
              src={book.image || images.imagePlaceholder}
              alt={`${book.author} ${book.title} `}
            />
          </StyledBookImage>
          <StyledBookDescription>
            <h2>{book.title}</h2>
            <h3>{book.author}</h3>
          </StyledBookDescription>
        </>
      )}
    </FlexContainer>
  );
};
export default BookContent;
