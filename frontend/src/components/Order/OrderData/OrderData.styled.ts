import styled from "styled-components";
import theme from "styles/theme";
import { Wrapper } from "../OrderCommonStyled";

const { colors, fonts } = theme;

export const OrderDataWrapper = styled(Wrapper)`
  width: 400px;
  min-height: 576px;
`;

export const BlockWrapper = styled.div`
  margin-bottom: 32px;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const Data = styled.p`
  margin-left: 24px;
  margin-bottom: 8px;

  font-family: ${fonts.regular};
  font-size: 16px;
  line-height: 1.5;
  color: ${colors.text.secondary};
  word-wrap: break-word;
`;

export const SmallSubTitle = styled.p`
  margin-bottom: 16px;

  font-family: ${fonts.semibold};
  font-size: 16px;
  line-height: 1.5;
  color: ${colors.text.primary};
`;

export const Text = styled.p`
  margin-left: 24px;
  margin-bottom: 16px;

  font-family: ${fonts.regular};
  font-size: 16px;
  line-height: 1.5;
  color: ${colors.text.primary};
`;
