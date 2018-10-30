// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import media from "../../utils/mediaQuery";
import defaultTokens from "../../defaultTokens";
import { StyledButton } from "../../Button";
import { DEVICES } from "../../utils/mediaQuery/consts";

import type { Props } from "./index";

const StyledChild = styled.div`
  flex: ${({ flex }) => flex};
  box-sizing: border-box;
  padding-right: ${({ theme }) => theme.orbit.spaceMedium};

  ${media.largeMobile(css`
    flex: none;
  `)};
`;

StyledChild.defaultProps = {
  theme: defaultTokens,
};

export const StyledModalFooter = styled.div`
  display: flex;
  bottom: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.orbit.paletteWhite};
  // TODO: create token paddingModalFooter
  padding: ${({ theme }) => `0 ${theme.orbit.spaceMedium} ${theme.orbit.spaceMedium}`};
  box-sizing: border-box;
  // TODO: create token boxShadowActionableInverted

  @media (max-width: ${DEVICES.largeMobile - 1}px) {
    ${StyledButton} {
      font-size: ${({ theme }) => theme.orbit.fontSizeButtonNormal};
      height: ${({ theme }) => theme.orbit.heightButtonNormal};
    }
  }

  ${media.largeMobile(css`
    justify-content: ${({ children }) => (children.length > 1 ? "space-between" : "flex-end")};
    // TODO: create token paddingModalFooterDesktop
    border-bottom-left-radius: ${({ theme }) => theme.orbit.borderRadiusNormal};
    border-bottom-right-radius: ${({ theme }) => theme.orbit.borderRadiusNormal};
  `)};

  ${StyledChild}:last-of-type {
    padding-right: 0;
  }
`;

StyledModalFooter.defaultProps = {
  theme: defaultTokens,
};

const ModalFooter = (props: Props) => {
  const { flex = "0 1 auto", children, dataTest } = props;
  return (
    <StyledModalFooter data-test={dataTest}>
      {React.Children.map(children, (item, key) => {
        if (item) {
          const childFlex = Array.isArray(flex) && flex.length !== 1 ? flex[key] || flex[0] : flex;
          return <StyledChild flex={childFlex}>{<item.type {...item.props} />}</StyledChild>;
        }
        return null;
      })}
    </StyledModalFooter>
  );
};

export default ModalFooter;
