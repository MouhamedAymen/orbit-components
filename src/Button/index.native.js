// @flow
import * as React from "react";
import styled, { ThemeProvider } from "styled-components";

import { ICON_SIZES } from "../Icon/consts";
import Touchable from "../Touchable";
import defaultTokens from "../defaultTokens";
import { TYPE_OPTIONS, SIZE_OPTIONS, TYPE_TOKENS } from "./consts";
import type { Props } from "./index.js.flow";
import {
  SharedStyledButtonWrapper,
  SharedStyledButtonText,
  getTypeToken,
  containerWidth,
  SharedIconContainer,
  SharedIconContainerRight,
} from "./shared";

export const StyledButton = styled(SharedStyledButtonWrapper)(({ bordered, theme, type }) => ({
  borderWidth: bordered ? "1px" : "0px",
  borderColor: getTypeToken(TYPE_TOKENS.borderColorButton)({ theme, type }),
}));

StyledButton.defaultProps = {
  theme: defaultTokens,
};

const IconContainerRight = SharedIconContainerRight(SharedIconContainer);

const Button = (props: Props) => {
  const {
    onClick,
    children,
    size = SIZE_OPTIONS.NORMAL,
    type = TYPE_OPTIONS.PRIMARY,
    bordered,
    disabled,
    icon,
    iconRight,
    ...rest
  } = props;
  const iconLeft = props.iconLeft || icon;
  const sizeIcon = size === ICON_SIZES.SMALL ? ICON_SIZES.SMALL : ICON_SIZES.MEDIUM;
  const onlyIcon = iconLeft && !children;

  return (
    <ThemeProvider theme={props.theme}>
      <Touchable disabled={disabled || !onClick} onPress={onClick} width={containerWidth(props)}>
        <StyledButton
          size={size}
          type={type}
          {...rest}
          bordered={bordered}
          disabled={disabled}
          width={containerWidth(props)}
        >
          {iconLeft && (
            <SharedIconContainer
              bordered={bordered}
              onlyIcon={onlyIcon}
              size={size}
              sizeIcon={sizeIcon}
              type={type}
            >
              {iconLeft}
            </SharedIconContainer>
          )}
          <SharedStyledButtonText size={size} type={type} bordered={bordered}>
            {children}
          </SharedStyledButtonText>
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
        </StyledButton>
      </Touchable>
    </ThemeProvider>
  );
};

Button.defaultProps = {
  theme: defaultTokens,
};

export default Button;
