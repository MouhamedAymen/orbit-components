// @flow
import * as React from "react";
import styled from "styled-components";

import { addScrollHandler, removeScrollHandler, getScrollingElement } from "../utils/scroll";
import defaultTokens from "../defaultTokens";

import type { Props, State } from "./index";

// TODO: add orbit token for box-shadow
const FloatingWrapper = styled.div`
  position: ${({ sticky }) => (sticky ? `fixed` : `relative`)};
  ${({ size }) => size.height && `top: ${size.height}px`};
  ${({ size }) => size.width && `width: ${size.width}px`};
  box-shadow: 0px 2px 20px 6px rgba(23, 27, 30, 0.15);
  border-radius: ${({ theme }) => theme.orbit.borderRadiusNormal};
`;

FloatingWrapper.defaultProps = {
  theme: defaultTokens,
};

class FloatingCard extends React.Component<Props, State> {
  state = {
    sticky: false,
    height: 0,
    width: 0,
  };

  componentDidMount() {
    addScrollHandler(this.handleScroll);
    window.addEventListener("resize", this.handleScroll);
    if (this.node.current) {
      const values = this.node.current.getBoundingClientRect();
      Object.assign(this.offsets, { initialTop: values.top, initialWidth: values.width });
    }
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleScroll);
    removeScrollHandler(this.handleScroll);
  }

  stickyState = (sticky: boolean, height: number, width: number) => {
    this.setState({
      sticky,
      height,
      width,
    });
  };

  handleScroll = () => {
    const element = this.node?.current;
    const elementHeight = element.offsetHeight;
    // $FlowFixMe
    const parent = element.parentNode.getBoundingClientRect();
    const scrollingElement = getScrollingElement().getBoundingClientRect();
    const { offset = 10 } = this.props;
    const { initialTop } = this.offsets;

    if (
      Math.abs(scrollingElement.top) + offset >= initialTop &&
      parent.bottom - elementHeight - offset >= 0
    ) {
      this.stickyState(true, offset, parent.width);
    } else if (parent.bottom - elementHeight - offset <= 0) {
      this.stickyState(false, parent.height - elementHeight, parent.width);
    } else {
      this.stickyState(false, 0, parent.width);
    }
  };

  node: {
    current: any | HTMLDivElement,
  } = React.createRef();

  offsets = {
    initialTop: 0,
    initialWidth: 0,
  };

  render() {
    const { children } = this.props;
    const { sticky, height, width } = this.state;
    return (
      <FloatingWrapper sticky={sticky} size={{ height, width }} ref={this.node}>
        {children}
      </FloatingWrapper>
    );
  }
}

export default FloatingCard;
