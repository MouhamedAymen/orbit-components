// @flow
import * as React from "react";
import { View, Text } from "react-native";
import styled from "styled-components";

import defaultTokens from "../defaultTokens";
import { TYPE_OPTIONS, SIZE_OPTIONS, TYPE_TOKENS, SIZE_TOKENS } from "./consts";

import type { Props } from "./index";

export const getSizeToken = name => ({ theme, size }) => {
  const tokens = {
    [SIZE_TOKENS.heightButton]: {
      [SIZE_OPTIONS.LARGE]: theme.orbit.heightButtonLarge,
      [SIZE_OPTIONS.NORMAL]: theme.orbit.heightButtonNormal,
      [SIZE_OPTIONS.SMALL]: theme.orbit.heightButtonSmall,
    },
    [SIZE_TOKENS.loadingWidth]: {
      [SIZE_OPTIONS.LARGE]: theme.orbit.widthIconMedium,
      [SIZE_OPTIONS.NORMAL]: theme.orbit.widthIconMedium,
      [SIZE_OPTIONS.SMALL]: theme.orbit.widthIconSmall,
    },
    [SIZE_TOKENS.loadingHeight]: {
      [SIZE_OPTIONS.LARGE]: theme.orbit.heightIconMedium,
      [SIZE_OPTIONS.NORMAL]: theme.orbit.heightIconMedium,
      [SIZE_OPTIONS.SMALL]: theme.orbit.heightIconSmall,
    },
    [SIZE_TOKENS.fontSizeButton]: {
      [SIZE_OPTIONS.LARGE]: theme.orbit.fontSizeButtonLarge,
      [SIZE_OPTIONS.NORMAL]: theme.orbit.fontSizeButtonNormal,
      [SIZE_OPTIONS.SMALL]: theme.orbit.fontSizeButtonSmall,
    },
    [SIZE_TOKENS.paddingButton]: {
      [SIZE_OPTIONS.LARGE]: theme.orbit.paddingButtonLarge,
      [SIZE_OPTIONS.NORMAL]: theme.orbit.paddingButtonNormal,
      [SIZE_OPTIONS.SMALL]: theme.orbit.paddingButtonSmall,
    },
    [SIZE_TOKENS.paddingButtonWithIcon]: {
      [SIZE_OPTIONS.LARGE]: theme.orbit.paddingButtonLargeWithIcon,
      [SIZE_OPTIONS.NORMAL]: theme.orbit.paddingButtonNormalWithIcon,
      [SIZE_OPTIONS.SMALL]: theme.orbit.paddingButtonSmallWithIcon,
    },
    [SIZE_TOKENS.marginRightIcon]: {
      [SIZE_OPTIONS.LARGE]: theme.orbit.marginButtonIconLarge,
      [SIZE_OPTIONS.NORMAL]: theme.orbit.marginButtonIconNormal,
      [SIZE_OPTIONS.SMALL]: theme.orbit.marginButtonIconSmall,
    },
  };
  return tokens[name][size];
};

export const getTypeToken = name => ({ theme, type }) => {
  const tokens = {
    [TYPE_TOKENS.backgroundButton]: {
      [TYPE_OPTIONS.PRIMARY]: theme.orbit.backgroundButtonPrimary,
      [TYPE_OPTIONS.SECONDARY]: theme.orbit.backgroundButtonSecondary,
      [TYPE_OPTIONS.INFO]: theme.orbit.backgroundButtonInfo,
      [TYPE_OPTIONS.SUCCESS]: theme.orbit.backgroundButtonSuccess,
      [TYPE_OPTIONS.WARNING]: theme.orbit.backgroundButtonWarning,
      [TYPE_OPTIONS.CRITICAL]: theme.orbit.backgroundButtonCritical,
      [TYPE_OPTIONS.FACEBOOK]: theme.orbit.backgroundButtonFacebook,
      [TYPE_OPTIONS.GOOGLE]: theme.orbit.backgroundButtonGoogle,
      [TYPE_OPTIONS.WHITE]: theme.orbit.paletteWhite, // TODO: token backgroundButtonWhite
    },
    [TYPE_TOKENS.backgroundButtonBordered]: {
      [TYPE_OPTIONS.PRIMARY]: theme.orbit.backgroundButtonBordered,
      [TYPE_OPTIONS.SECONDARY]: theme.orbit.backgroundButtonBordered,
      [TYPE_OPTIONS.INFO]: theme.orbit.backgroundButtonBordered,
      [TYPE_OPTIONS.SUCCESS]: theme.orbit.backgroundButtonBordered,
      [TYPE_OPTIONS.WARNING]: theme.orbit.backgroundButtonBordered,
      [TYPE_OPTIONS.CRITICAL]: theme.orbit.backgroundButtonBordered,
      [TYPE_OPTIONS.FACEBOOK]: theme.orbit.backgroundButtonBordered,
      [TYPE_OPTIONS.GOOGLE]: theme.orbit.backgroundButtonBordered,
      [TYPE_OPTIONS.WHITE]: "transparent", // TODO: token backgroundButtonWhiteBordered
    },
    [TYPE_TOKENS.colorTextButton]: {
      [TYPE_OPTIONS.PRIMARY]: theme.orbit.colorTextButtonPrimary,
      [TYPE_OPTIONS.SECONDARY]: theme.orbit.colorTextButtonSecondary,
      [TYPE_OPTIONS.INFO]: theme.orbit.colorTextButtonInfo,
      [TYPE_OPTIONS.SUCCESS]: theme.orbit.colorTextButtonSuccess,
      [TYPE_OPTIONS.WARNING]: theme.orbit.colorTextButtonWarning,
      [TYPE_OPTIONS.CRITICAL]: theme.orbit.colorTextButtonCritical,
      [TYPE_OPTIONS.FACEBOOK]: theme.orbit.colorTextButtonFacebook,
      [TYPE_OPTIONS.GOOGLE]: theme.orbit.colorTextButtonGoogle,
      [TYPE_OPTIONS.WHITE]: theme.orbit.paletteInkNormal, // TODO: token colorTextButtonWhite
    },
    [TYPE_TOKENS.colorTextButtonBordered]: {
      [TYPE_OPTIONS.PRIMARY]: theme.orbit.colorTextButtonPrimaryBordered,
      [TYPE_OPTIONS.SECONDARY]: theme.orbit.colorTextButtonSecondaryBordered,
      [TYPE_OPTIONS.INFO]: theme.orbit.colorTextButtonInfoBordered,
      [TYPE_OPTIONS.SUCCESS]: theme.orbit.colorTextButtonSuccessBordered,
      [TYPE_OPTIONS.WARNING]: theme.orbit.colorTextButtonWarningBordered,
      [TYPE_OPTIONS.CRITICAL]: theme.orbit.colorTextButtonCriticalBordered,
      [TYPE_OPTIONS.FACEBOOK]: theme.orbit.colorTextButtonFacebookBordered,
      [TYPE_OPTIONS.GOOGLE]: theme.orbit.colorTextButtonGoogleBordered,
      [TYPE_OPTIONS.WHITE]: theme.orbit.paletteWhite, // TODO: token colorTextButtonWhiteBordered
    },
    [TYPE_TOKENS.borderColorButton]: {
      [TYPE_OPTIONS.PRIMARY]: theme.orbit.borderColorButtonPrimaryBordered,
      [TYPE_OPTIONS.SECONDARY]: theme.orbit.borderColorButtonSecondaryBordered,
      [TYPE_OPTIONS.INFO]: theme.orbit.borderColorButtonInfoBordered,
      [TYPE_OPTIONS.SUCCESS]: theme.orbit.borderColorButtonSuccessBordered,
      [TYPE_OPTIONS.WARNING]: theme.orbit.borderColorButtonWarningBordered,
      [TYPE_OPTIONS.CRITICAL]: theme.orbit.borderColorButtonCriticalBordered,
      [TYPE_OPTIONS.FACEBOOK]: theme.orbit.borderColorButtonFacebookBordered,
      [TYPE_OPTIONS.GOOGLE]: theme.orbit.borderColorButtonGoogleBordered,
      [TYPE_OPTIONS.WHITE]: theme.orbit.paletteWhite, // TODO: token borderColorButtonWhiteBordered
    },
  };
  return tokens[name][type];
};

export const containerWidth = ({ block, width, onlyIcon, size, theme }) =>
  block
    ? "100%"
    : (width && width != "auto" ? `${width}px` : width) ||
      (onlyIcon && getSizeToken(SIZE_TOKENS.heightButton)({ size, theme })) ||
      "auto";

export const SharedStyledButtonWrapper = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: ${containerWidth}; /* useful here too for circled */
  height: ${getSizeToken(SIZE_TOKENS.heightButton)};
  background: ${({ bordered }) =>
    bordered
      ? getTypeToken(TYPE_TOKENS.backgroundButtonBordered)
      : getTypeToken(TYPE_TOKENS.backgroundButton)};
  border: 0;
  border-radius: ${({ theme, circled }) =>
    circled ? getSizeToken(SIZE_TOKENS.heightButton) : theme.orbit.borderRadiusNormal};
  padding: 0;
  padding-right: ${({ onlyIcon, iconRight }) =>
    (onlyIcon && "0") ||
    (iconRight
      ? getSizeToken(SIZE_TOKENS.paddingButtonWithIcon)
      : getSizeToken(SIZE_TOKENS.paddingButton))};
  padding-left: ${({ onlyIcon, icon, iconLeft }) =>
    (onlyIcon && "0") ||
    (iconLeft || icon
      ? getSizeToken(SIZE_TOKENS.paddingButtonWithIcon)
      : getSizeToken(SIZE_TOKENS.paddingButton))};
  ${({ disabled, theme }) => disabled && `opacity: ${theme.orbit.opacityButtonDisabled}`};
`;

SharedStyledButtonWrapper.defaultProps = {
  theme: defaultTokens,
};

export const sharedTextStyle = ({ theme, type, size, bordered }) => `
  color: ${
    bordered
      ? getTypeToken(TYPE_TOKENS.colorTextButtonBordered)({ theme, type })
      : getTypeToken(TYPE_TOKENS.colorTextButton)({ theme, type })
  } !important;
  font-weight: ${theme.orbit.fontWeightBold}!important;
  font-size: ${getSizeToken(SIZE_TOKENS.fontSizeButton)({ theme, size })};
`;

export const SharedStyledButtonText = styled(Text)(props => sharedTextStyle(props));

SharedStyledButtonText.defaultProps = {
  theme: defaultTokens,
};

export const SharedIconContainer = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-right: ${({ onlyIcon }) => (onlyIcon ? "0" : getSizeToken(SIZE_TOKENS.marginRightIcon))};
`;

SharedIconContainer.defaultProps = {
  theme: defaultTokens,
};

export const SharedIconContainerRight = (Component = SharedIconContainer) => styled(Component)`
  margin-right: 0;
  margin-left: ${({ onlyIcon }) => (onlyIcon ? "0" : getSizeToken(SIZE_TOKENS.marginRightIcon))};
`;

SharedIconContainerRight.defaultProps = {
  theme: defaultTokens,
};
