// @flow
import * as React from "react";
import styled from "styled-components";
// Cannot get eslint to properly alias 'react-native' to 'react-native-web'
// eslint-disable-next-line import/no-extraneous-dependencies
import { Image } from "react-native";

import defaultTokens from "../defaultTokens";
import { baseURL, CODES } from "./consts";

import type { Props } from "./index";

// min-height necessary as height: auto; gives 0 because of parent containers being 0.
const StyledCountryFlag = styled(Image)`
  min-height: 13px;
  height: ${({ theme }) => theme.orbit.heightCountryFlag};
  width: ${({ theme }) => theme.orbit.widthCountryFlag};
  border-radius: ${({ theme }) => theme.orbit.borderRadiusSmall};
  background-color: ${({ theme }) => theme.orbit.backgroundCountryFlag};
`;

StyledCountryFlag.defaultProps = {
  theme: defaultTokens,
};

const CountryFlag = (props: Props) => {
  const { code = CODES.ANYWHERE, name = "Anywhere" } = props;
  return (
    <StyledCountryFlag
      key={code}
      source={{ uri: `https:${baseURL}/flags/24x0/flag-${code}.jpg`, width: 24, height: 13 }}
      // Still no support for multiple sources https://github.com/necolas/react-native-web/issues/515
      // srcSet={`${baseURL}/flags/48x0/flag-${code}.jpg 2x`}
      alt={name}
      title={name}
    />
  );
};

export default CountryFlag;
