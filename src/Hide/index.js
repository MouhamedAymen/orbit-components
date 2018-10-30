// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import mediaQueries from "../utils/mediaQuery";
import { DEVICES } from "../utils/mediaQuery/consts";

import type { Props } from "./index";

const sortedBreakpoints = Object.keys(DEVICES).sort((a, b) => DEVICES[a] - DEVICES[b]);

const StyledHide = styled.div`
  ${({ on, inline }) =>
    sortedBreakpoints.map(
      viewport =>
        viewport in mediaQueries
          ? css`
              ${mediaQueries[viewport](css`
                display: ${on.indexOf(viewport) !== -1
                  ? "none"
                  : (inline && "inline-block") || "block"};
              `)};
            `
          : viewport === "smallMobile" &&
            on.indexOf(viewport) !== -1 &&
            css`
              display: none;
            `,
    )};
`;

const Hide = ({ on = [], children, inline }: Props) => (
  <StyledHide on={on} inline={inline}>
    {children}
  </StyledHide>
);
export default Hide;
