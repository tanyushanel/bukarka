import styled from "styled-components";

export const Wrapper = styled.div`
  width: 816px;
  padding: 16px 16px 24px;

  background: var(--bukarka-light-grey-2);
`;

export const SubTitle = styled.h2`
  position: relative;
  left: -16px;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 280px;
  height: 24px;

  padding: 0 12px 0 16px;

  background-color: var(--bukarka-yellow);

  font-family: "Montserrat-Bold";
  font-weight: 700;
  font-size: 16px;

  // line-height: 24px;
  line-height: 1.5;
  color: var(--bukarka-black);

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 8px;
    background: var(--bukarka-orange);
  }
`;
