import React, { useEffect, useState } from "react";

import {
  Item,
  SmallSubTitle,
  StyledBlock,
  StyledCatalog,
  StyledItem,
  SubtitleLink,
  TitleLink,
  Wrapper,
} from "./Catalog.styled";
import { instance } from "utils/fetchInstance";

interface Category {
  title: string;
  subcategories: Subcategory[];
}

interface Subcategory {
  title: string;
  links: string[];
}

const Catalog: React.FC<{ closeModal: () => void }> = ({ closeModal }) => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await instance.get("/api/categories");
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Wrapper>
      <StyledCatalog>
        <Item>
          <TitleLink to={`/catalog/`} onClick={closeModal}>
            Усі книги
          </TitleLink>
        </Item>

        {categories.length > 0 &&
          categories.map((category: Category, index) => (
            <div key={`category-${index}`}>
              <SubtitleLink
                to={`/catalog/${encodeURI(category.title)}`}
                key={`subtitle-${index}`}
                onClick={closeModal}
              >
                {category.title}
              </SubtitleLink>
              <ul>
                {category.subcategories.map(
                  (subcategory: Subcategory, subcatIndex: number) => (
                    <li key={subcatIndex}>
                      <StyledBlock>
                        <SmallSubTitle to="" key={`subTitle-${subcatIndex}`}>
                          {subcategory.title}
                        </SmallSubTitle>
                        <ul>
                          {!!subcategory.links &&
                            subcategory.links.map((link, linkIndex) => (
                              <li key={linkIndex}>
                                <StyledItem
                                  to={`/catalog/${encodeURI(
                                    category.title
                                  )}/${encodeURI(link)}`}
                                  onClick={closeModal}
                                >
                                  {link}
                                </StyledItem>
                              </li>
                            ))}
                        </ul>
                      </StyledBlock>
                    </li>
                  )
                )}
              </ul>
            </div>
          ))}
      </StyledCatalog>
    </Wrapper>
  );
};

export default Catalog;
