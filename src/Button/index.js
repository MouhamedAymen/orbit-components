// @flow
import * as React from "react";
import { View } from "react-native";
import styled from "styled-components";

import defaultTokens from "../defaultTokens";
import { ICON_SIZES } from "../Icon/consts";
import { TYPE_OPTIONS, SIZE_OPTIONS, TYPE_TOKENS, SIZE_TOKENS } from "./consts";
import Loading, { StyledSpinner } from "../Loading";
import { getSize } from "../Icon";
import {
  SharedStyledButtonWrapper,
  sharedTextStyle,
  SharedIconContainer,
  SharedIconContainerRight,
} from "./shared";

import type { Props } from "./index";

const getSizeToken = name => ({ theme, size }) => {
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
const getTypeToken = name => ({ theme, type }) => {
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
    [TYPE_TOKENS.backgroundButtonHover]: {
      [TYPE_OPTIONS.PRIMARY]: theme.orbit.backgroundButtonPrimaryHover,
      [TYPE_OPTIONS.SECONDARY]: theme.orbit.backgroundButtonSecondaryHover,
      [TYPE_OPTIONS.INFO]: theme.orbit.backgroundButtonInfoHover,
      [TYPE_OPTIONS.SUCCESS]: theme.orbit.backgroundButtonSuccessHover,
      [TYPE_OPTIONS.WARNING]: theme.orbit.backgroundButtonWarningHover,
      [TYPE_OPTIONS.CRITICAL]: theme.orbit.backgroundButtonCriticalHover,
      [TYPE_OPTIONS.FACEBOOK]: theme.orbit.backgroundButtonFacebookHover,
      [TYPE_OPTIONS.GOOGLE]: theme.orbit.backgroundButtonGoogleHover,
      [TYPE_OPTIONS.WHITE]: theme.orbit.paletteWhiteHover, // TODO: token backgroundButtonWhiteHover
    },
    [TYPE_TOKENS.backgroundButtonActive]: {
      [TYPE_OPTIONS.PRIMARY]: theme.orbit.backgroundButtonPrimaryActive,
      [TYPE_OPTIONS.SECONDARY]: theme.orbit.backgroundButtonSecondaryActive,
      [TYPE_OPTIONS.INFO]: theme.orbit.backgroundButtonInfoActive,
      [TYPE_OPTIONS.SUCCESS]: theme.orbit.backgroundButtonSuccessActive,
      [TYPE_OPTIONS.WARNING]: theme.orbit.backgroundButtonWarningActive,
      [TYPE_OPTIONS.CRITICAL]: theme.orbit.backgroundButtonCriticalActive,
      [TYPE_OPTIONS.FACEBOOK]: theme.orbit.backgroundButtonFacebookActive,
      [TYPE_OPTIONS.GOOGLE]: theme.orbit.backgroundButtonGoogleActive,
      [TYPE_OPTIONS.WHITE]: theme.orbit.paletteWhiteActive, // TODO: token backgroundButtonWhiteActive
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
    [TYPE_TOKENS.backgroundButtonBorderedHover]: {
      [TYPE_OPTIONS.PRIMARY]: theme.orbit.backgroundButtonBorderedHover,
      [TYPE_OPTIONS.SECONDARY]: theme.orbit.backgroundButtonBorderedHover,
      [TYPE_OPTIONS.INFO]: theme.orbit.backgroundButtonBorderedHover,
      [TYPE_OPTIONS.SUCCESS]: theme.orbit.backgroundButtonBorderedHover,
      [TYPE_OPTIONS.WARNING]: theme.orbit.backgroundButtonBorderedHover,
      [TYPE_OPTIONS.CRITICAL]: theme.orbit.backgroundButtonBorderedHover,
      [TYPE_OPTIONS.FACEBOOK]: theme.orbit.backgroundButtonBorderedHover,
      [TYPE_OPTIONS.GOOGLE]: theme.orbit.backgroundButtonBorderedHover,
      [TYPE_OPTIONS.WHITE]: "rgba(255, 255, 255, 0.2)", // TODO: token backgroundButtonWhiteBorderedHover
    },
    [TYPE_TOKENS.backgroundButtonBorderedActive]: {
      [TYPE_OPTIONS.PRIMARY]: theme.orbit.backgroundButtonBorderedActive,
      [TYPE_OPTIONS.SECONDARY]: theme.orbit.backgroundButtonBorderedActive,
      [TYPE_OPTIONS.INFO]: theme.orbit.backgroundButtonBorderedActive,
      [TYPE_OPTIONS.SUCCESS]: theme.orbit.backgroundButtonBorderedActive,
      [TYPE_OPTIONS.WARNING]: theme.orbit.backgroundButtonBorderedActive,
      [TYPE_OPTIONS.CRITICAL]: theme.orbit.backgroundButtonBorderedActive,
      [TYPE_OPTIONS.FACEBOOK]: theme.orbit.backgroundButtonBorderedActive,
      [TYPE_OPTIONS.GOOGLE]: theme.orbit.backgroundButtonBorderedActive,
      [TYPE_OPTIONS.WHITE]: "rgba(255, 255, 255, 0.25)", // TODO: token backgroundButtonWhiteBorderedActive
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
    [TYPE_TOKENS.colorTextButtonHover]: {
      [TYPE_OPTIONS.PRIMARY]: theme.orbit.colorTextButtonPrimaryHover,
      [TYPE_OPTIONS.SECONDARY]: theme.orbit.colorTextButtonSecondaryHover,
      [TYPE_OPTIONS.INFO]: theme.orbit.colorTextButtonInfoHover,
      [TYPE_OPTIONS.SUCCESS]: theme.orbit.colorTextButtonSuccessHover,
      [TYPE_OPTIONS.WARNING]: theme.orbit.colorTextButtonWarningHover,
      [TYPE_OPTIONS.CRITICAL]: theme.orbit.colorTextButtonCriticalHover,
      [TYPE_OPTIONS.FACEBOOK]: theme.orbit.colorTextButtonFacebookHover,
      [TYPE_OPTIONS.GOOGLE]: theme.orbit.colorTextButtonGoogleHover,
      [TYPE_OPTIONS.WHITE]: theme.orbit.paletteInkNormalHover, // TODO: token colorTextButtonWhiteHover
    },
    [TYPE_TOKENS.colorTextButtonBorderedHover]: {
      [TYPE_OPTIONS.PRIMARY]: theme.orbit.colorTextButtonPrimaryBorderedHover,
      [TYPE_OPTIONS.SECONDARY]: theme.orbit.colorTextButtonSecondaryBorderedHover,
      [TYPE_OPTIONS.INFO]: theme.orbit.colorTextButtonInfoBorderedHover,
      [TYPE_OPTIONS.SUCCESS]: theme.orbit.colorTextButtonSuccessBorderedHover,
      [TYPE_OPTIONS.WARNING]: theme.orbit.colorTextButtonWarningBorderedHover,
      [TYPE_OPTIONS.CRITICAL]: theme.orbit.colorTextButtonCriticalBorderedHover,
      [TYPE_OPTIONS.FACEBOOK]: theme.orbit.colorTextButtonFacebookBorderedHover,
      [TYPE_OPTIONS.GOOGLE]: theme.orbit.colorTextButtonGoogleBorderedHover,
      [TYPE_OPTIONS.WHITE]: theme.orbit.paletteWhite, // TODO: token colorTextButtonWhiteBorderedHover
    },
    [TYPE_TOKENS.colorTextButtonActive]: {
      [TYPE_OPTIONS.PRIMARY]: theme.orbit.colorTextButtonPrimaryActive,
      [TYPE_OPTIONS.SECONDARY]: theme.orbit.colorTextButtonSecondaryActive,
      [TYPE_OPTIONS.INFO]: theme.orbit.colorTextButtonInfoActive,
      [TYPE_OPTIONS.SUCCESS]: theme.orbit.colorTextButtonSuccessActive,
      [TYPE_OPTIONS.WARNING]: theme.orbit.colorTextButtonWarningActive,
      [TYPE_OPTIONS.CRITICAL]: theme.orbit.colorTextButtonCriticalActive,
      [TYPE_OPTIONS.FACEBOOK]: theme.orbit.colorTextButtonFacebookActive,
      [TYPE_OPTIONS.GOOGLE]: theme.orbit.colorTextButtonGoogleActive,
      [TYPE_OPTIONS.WHITE]: theme.orbit.paletteInkNormalActive, // TODO: token colorTextButtonWhiteActive
    },
    [TYPE_TOKENS.colorTextButtonBorderedActive]: {
      [TYPE_OPTIONS.PRIMARY]: theme.orbit.colorTextButtonPrimaryBorderedActive,
      [TYPE_OPTIONS.SECONDARY]: theme.orbit.colorTextButtonSecondaryBorderedActive,
      [TYPE_OPTIONS.INFO]: theme.orbit.colorTextButtonInfoBorderedActive,
      [TYPE_OPTIONS.SUCCESS]: theme.orbit.colorTextButtonSuccessBorderedActive,
      [TYPE_OPTIONS.WARNING]: theme.orbit.colorTextButtonWarningBorderedActive,
      [TYPE_OPTIONS.CRITICAL]: theme.orbit.colorTextButtonCriticalBorderedActive,
      [TYPE_OPTIONS.FACEBOOK]: theme.orbit.colorTextButtonFacebookBorderedActive,
      [TYPE_OPTIONS.GOOGLE]: theme.orbit.colorTextButtonGoogleBorderedActive,
      [TYPE_OPTIONS.WHITE]: theme.orbit.paletteWhite, // TODO: token colorTextButtonWhiteBorderedActive
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
    [TYPE_TOKENS.borderColorButtonHover]: {
      [TYPE_OPTIONS.PRIMARY]: theme.orbit.borderColorButtonPrimaryBorderedHover,
      [TYPE_OPTIONS.SECONDARY]: theme.orbit.borderColorButtonSecondaryBorderedHover,
      [TYPE_OPTIONS.INFO]: theme.orbit.borderColorButtonInfoBorderedHover,
      [TYPE_OPTIONS.SUCCESS]: theme.orbit.borderColorButtonSuccessBorderedHover,
      [TYPE_OPTIONS.WARNING]: theme.orbit.borderColorButtonWarningBorderedHover,
      [TYPE_OPTIONS.CRITICAL]: theme.orbit.borderColorButtonCriticalBorderedHover,
      [TYPE_OPTIONS.FACEBOOK]: theme.orbit.borderColorButtonFacebookBorderedHover,
      [TYPE_OPTIONS.GOOGLE]: theme.orbit.borderColorButtonGoogleBorderedHover,
      [TYPE_OPTIONS.WHITE]: theme.orbit.paletteWhite, // TODO: token borderColorButtonWhiteBorderedHover
    },
    [TYPE_TOKENS.borderColorButtonActive]: {
      [TYPE_OPTIONS.PRIMARY]: theme.orbit.borderColorButtonPrimaryBorderedActive,
      [TYPE_OPTIONS.SECONDARY]: theme.orbit.borderColorButtonSecondaryBorderedActive,
      [TYPE_OPTIONS.INFO]: theme.orbit.borderColorButtonInfoBorderedActive,
      [TYPE_OPTIONS.SUCCESS]: theme.orbit.borderColorButtonSuccessBorderedActive,
      [TYPE_OPTIONS.WARNING]: theme.orbit.borderColorButtonWarningBorderedActive,
      [TYPE_OPTIONS.CRITICAL]: theme.orbit.borderColorButtonCriticalBorderedActive,
      [TYPE_OPTIONS.FACEBOOK]: theme.orbit.borderColorButtonFacebookBorderedActive,
      [TYPE_OPTIONS.GOOGLE]: theme.orbit.borderColorButtonGoogleBorderedActive,
      [TYPE_OPTIONS.WHITE]: theme.orbit.paletteWhite, // TODO: token borderColorButtonWhiteBorderedActive
    },
  };
  return tokens[name][type];
};

const IconContainer = styled(SharedIconContainer)`
  color: ${({ bordered }) =>
    bordered
      ? getTypeToken(TYPE_TOKENS.colorTextButtonBordered)
      : getTypeToken(TYPE_TOKENS.colorTextButton)};
  transition: background ${({ theme }) => theme.orbit.durationFast} ease-in-out,
    box-shadow ${({ theme }) => theme.orbit.durationFast} ease-in-out;

  > * {
    width: ${({ sizeIcon }) => getSize(sizeIcon)};
    height: ${({ sizeIcon }) => getSize(sizeIcon)};
  }
`;

const IconContainerRight = SharedIconContainerRight(IconContainer);

export const StyledButton = styled(
  ({
    theme,
    component,
    circled,
    external,
    type,
    icon,
    iconLeft,
    iconRight,
    sizeIcon,
    width,
    bordered,
    loading,
    onlyIcon,
    block,
    style,
    dataTest,
    submit,
    ...props
  }) => {
    const isButtonWithHref = component === "button" && props.href;
    const Component = isButtonWithHref ? "a" : component;
    const buttonType = submit ? "submit" : "button";
    return (
      <Component data-test={dataTest} type={!isButtonWithHref ? buttonType : undefined} {...props}>
        {props.children}
      </Component>
    );
  },
)`
  display: ${({ href, component }) => (href || component === "a" ? "inline-flex" : "flex")};
  text-decoration: none;
  width: ${({ block, width, onlyIcon }) =>
    block
      ? "100%"
      : (width && `${width}px`) || (onlyIcon && getSizeToken(SIZE_TOKENS.heightButton)) || "auto"};
  outline: 0;
  padding: 0;
  border: 0;
  pointer-events: ${({ disabled, loading }) => (disabled || loading) && "none"};
  cursor: ${({ disabled, loading }) => (disabled || loading ? "default" : "pointer")};
  ${props => sharedTextStyle(props)}
`;

StyledButton.defaultProps = {
  theme: defaultTokens,
};

const StyledButtonWrapper = styled(SharedStyledButtonWrapper)`
  display: ${({ href, component }) => (href || component === "a" ? "inline-flex" : "flex")};
  flex: ${({ block }) => (block ? "1 1 100%" : "0 0 auto")};
  transition: all 0.15s ease-in-out !important;
  outline: 0;
  opacity: ${({ disabled, theme }) => disabled && theme.orbit.opacityButtonDisabled};
  box-shadow: ${({ bordered, theme, type }) =>
    bordered &&
    `inset 0 0 0 1px ${getTypeToken(TYPE_TOKENS.borderColorButton)({
      theme,
      type,
    })}`}; // Cannot resolve with 0 0 0 1px getTypeToken(TYPE_TOKENS.borderColorButton)

  &:hover {
    background: ${({ disabled, bordered }) =>
      !disabled &&
      (bordered
        ? getTypeToken(TYPE_TOKENS.backgroundButtonBorderedHover)
        : getTypeToken(TYPE_TOKENS.backgroundButtonHover))};
    box-shadow: ${({ disabled, bordered, theme, type }) =>
      !disabled &&
      bordered &&
      `inset 0 0 0 1px ${getTypeToken(TYPE_TOKENS.borderColorButtonHover)({ theme, type })}`};
    color: ${({ disabled, bordered }) =>
      !disabled &&
      (bordered
        ? getTypeToken(TYPE_TOKENS.colorTextButtonBorderedHover)
        : getTypeToken(TYPE_TOKENS.colorTextButtonHover))}!important;

    ${IconContainer} {
      color: ${({ disabled, bordered }) =>
        !disabled &&
        (bordered
          ? getTypeToken(TYPE_TOKENS.colorTextButtonBorderedHover)
          : getTypeToken(TYPE_TOKENS.colorTextButtonHover))};
    }
  }

  &:active {
    ${({ disabled, theme }) =>
      !disabled && `transform: scale(${theme.orbit.modifierScaleButtonActive})`};
    background: ${({ disabled, bordered }) =>
      !disabled &&
      (bordered
        ? getTypeToken(TYPE_TOKENS.backgroundButtonBorderedActive)
        : getTypeToken(TYPE_TOKENS.backgroundButtonActive))};
    box-shadow: ${({ disabled, bordered, theme, type }) =>
      !disabled &&
      (bordered &&
        `inset 0 0 0 1px ${getTypeToken(TYPE_TOKENS.borderColorButtonActive)({ theme, type })}`)};
    color: ${({ disabled, bordered }) =>
      !disabled &&
      (bordered
        ? getTypeToken(TYPE_TOKENS.colorTextButtonBorderedActive)
        : getTypeToken(TYPE_TOKENS.colorTextButtonActive))}!important;
    & ${IconContainer} {
      color: ${({ disabled, bordered }) =>
        !disabled &&
        (bordered
          ? getTypeToken(TYPE_TOKENS.colorTextButtonBorderedActive)
          : getTypeToken(TYPE_TOKENS.colorTextButtonActive))};
    }
  }

  &:enabled:focus {
    box-shadow: ${({ bordered, theme, type }) =>
        bordered &&
        `inset 0 0 0 1px ${getTypeToken(TYPE_TOKENS.borderColorButton)({ theme, type })},`}
      ${({ theme }) => theme.orbit.boxShadowButtonFocus};
  }

  ${StyledSpinner} {
    width: ${getSizeToken(SIZE_TOKENS.loadingWidth)};
    height: ${getSizeToken(SIZE_TOKENS.loadingHeight)};
  }
`;

const StyledButtonContent = styled(View)`
  visibility: ${({ loading }) => loading && "hidden"};
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

StyledButtonContent.defaultProps = {
  theme: defaultTokens,
};

const Button = (props: Props) => {
  const {
    component = "button",
    children,
    bordered,
    disabled,
    href,
    size = SIZE_OPTIONS.NORMAL,
    icon,
    iconRight,
    external,
    type = TYPE_OPTIONS.PRIMARY,
    block,
    loading = false,
    width = 0,
    circled,
  } = props;
  const iconLeft = props.iconLeft || icon;
  const sizeIcon = size === ICON_SIZES.SMALL ? ICON_SIZES.SMALL : ICON_SIZES.MEDIUM;
  const onlyIcon = iconLeft && !children;

  return (
    <StyledButton
      block={block}
      component={component}
      onlyIcon={onlyIcon}
      size={size}
      target={href && external ? "_blank" : undefined}
      type={type}
      width={width}
      {...props}
    >
      <StyledButtonWrapper
        bordered={bordered}
        block={block}
        disabled={disabled}
        loading={loading}
        onlyIcon={onlyIcon}
        size={size}
        sizeIcon={sizeIcon}
        type={type}
        width={width}
        circled={circled}
      >
        {loading && <Loading type="buttonLoader" />}
        <StyledButtonContent loading={loading}>
          {iconLeft && (
            <IconContainer
              bordered={bordered}
              onlyIcon={onlyIcon}
              size={size}
              sizeIcon={sizeIcon}
              type={type}
            >
              {iconLeft}
            </IconContainer>
          )}
          {children}
          {iconRight && (
            <IconContainerRight
              bordered={bordered}
              onlyIcon={onlyIcon}
              size={size}
              sizeIcon={sizeIcon}
              type={type}
            >
              {iconRight}
            </IconContainerRight>
          )}
        </StyledButtonContent>
      </StyledButtonWrapper>
    </StyledButton>
  );
};

export default Button;
