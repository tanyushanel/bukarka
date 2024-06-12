import { Pagination } from "components";
import { useBooks } from "components/Book";
import { BreadCrumbs, Label } from "pages/CommonPages.styled";
import React, { useEffect } from "react";
import { Outlet, useParams, useSearchParams } from "react-router-dom";
import { PageWrapper, StyledCommonWrapper, Wrapper } from "styles/CommonStyled";

const CatalogPage: React.FC = () => {
  const { category, subcategory, link } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const { books, currentPage, setCurrentPage, totalPages, fetchBooks } =
    useBooks();

  useEffect(() => {
    const page = searchParams.get("page")
      ? Number(searchParams.get("page"))
      : 1;

    const loadData = async () => {
      if (page !== currentPage) {
        setCurrentPage(page);
      } else {
        await fetchBooks(page, category, subcategory, link);
      }
    };

    loadData();
  }, [
    category,
    subcategory,
    link,
    searchParams,
    currentPage,
    setCurrentPage,
    fetchBooks,
  ]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    setSearchParams({ page: page.toString() });
  };

  console.log(books);

  return (
    <StyledCommonWrapper>
      <PageWrapper>
        <Wrapper>
          <BreadCrumbs>Каталог | {category} </BreadCrumbs>
          <Label> {link || subcategory || category || "Усі книги"} </Label>

          <Outlet context={{ books }} />

          {!!books.length && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          )}
        </Wrapper>
      </PageWrapper>
    </StyledCommonWrapper>
  );
};

export default CatalogPage;
