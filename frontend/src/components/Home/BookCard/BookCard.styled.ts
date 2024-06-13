import { StarIcon } from "assets/icons";
import styled from "styled-components";

export const StyledItemCard = styled.div`
  margin-top: 0;
  position: relative;
  width: 192px;
`;

export const StyledItemImage = styled.div`
  width: 192px;
  height: 264px;
  overflow: hidden;
  cursor: pointer;
  img {
    width: 192px;
    height: auto;
    object-fit: contain;
    object-position: 50% 50%;
  }
`;

export const StyledTitle = styled.h3`
  font-family: "Montserrat-Semibold";
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0em;
  margin-top: 8px;
  color: #1e1e1e;
  text-align: left;
  cursor: pointer;
  div {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
  }
`;

export const StyledPrice = styled.div`
  font-family: "Montserrat-Bold";
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #004f98;
  margin-bottom: 8px;
`;

export const StyledNameAuthor = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  text-align: left;
  color: #7c7165;
`;

export const Button = styled.button`
  padding: 8px 16px;
  width: 160px;
  border: none;

  background: var(--bukarka-orange);
  color: var(--bukarka-black);

  font-family: "Montserrat-Bold";
  font-weight: 700;
  font-size: 16px;
  //transition: all 0.5s ease;
  &:hover {
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.25);
  }
  &:active {
    color: var(--bukarka-yellow);
  }
`;

export const StyledFavoriteButton = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;

export const EmptyIcon = styled(StarIcon)`
  fill: var(--bukarka-white);
`;

export const FullIcon = styled(StarIcon)`
  fill: var(--bukarka-yellow);
`;
