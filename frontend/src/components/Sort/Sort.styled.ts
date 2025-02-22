import styled from "styled-components";
import theme from "styles/theme";

const { colors } = theme;

export const Options = styled.select`
  font-family: inherit;
  color: ${colors.text.secondary};
  background: ${colors.background.primary};
  position: absolute;
  right: 0;
  top: -2.5rem;
  padding: 0.25rem 0;
  border: none;
  width: fit-content;

  &:focus-visible {
    outline: none;
  }

  & option {
    background: ${colors.background.primary};

    &:selected {
      background: ${colors.accent.deepBlue};
      color: ${colors.background.primary};
    }

    &:hover {
      background: ${colors.accent.deepBlue};
      color: ${colors.background.primary};
    }

    &.section {
      font-weight: 600;
    }
  }
`;
