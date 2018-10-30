// @flow
import { css } from "styled-components";

import { QUERIES } from "./consts";

export const breakpoints = Object.assign(
  {},
  ...Object.keys(QUERIES).map(name => ({
    [name]: QUERIES[name].min && `(min-width: ${QUERIES[name].min}px)`,
  })),
);

const mediaQueries = Object.assign(
  {},
  ...Object.keys(breakpoints).map(name => ({
    [name]: style =>
      css`
        @media ${breakpoints[name]} {
          ${style};
        }
      `,
  })),
);

export default mediaQueries;
