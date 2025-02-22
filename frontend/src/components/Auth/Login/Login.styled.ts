import styled from "styled-components";
import theme from "styles/theme";

const { colors } = theme;

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  padding: 56px 96px;
`;

export const Title = styled.h2`
  margin-bottom: 32px;

  font-weight: 700;
  font-size: 16px;
  line-height: 1.5;
  text-align: center;
`;

export const Prompt = styled.button`
  display: block;
  width: fit-content;
  margin: 0 auto;

  background-color: transparent;
  color: ${colors.accent.orange};

  font-weight: 600;
  font-size: 16px;
  line-height: 1.5;
  text-align: center;

  transition: color 0.3s ease;

  &:hover {
    color: ${colors.accent.blue};
  }
`;
