// @flow
import * as React from "react";
import { shallow } from "enzyme";

import Card from "../index";
import CardSection from "../CardSection";
import Heading from "../../Heading";
import Text from "../../Text";
import SPACINGS_AFTER from "../../common/getSpacingToken/consts";
import defaultTokens from "../../defaultTokens";
import CLOSE_BUTTON_DATA_TEST from "../consts";

const text = "Text for testing";

describe("Card", () => {
  it("should contain CardSection", () => {
    const component = shallow(
      <Card dataTest="test">
        <CardSection>
          <Heading type="title3" element="h3">
            {text}
          </Heading>
          <Text>{text}</Text>
        </CardSection>
      </Card>,
    );

    expect(component.find("CardSection").exists()).toBe(true);
  });

  it("should have margin-bottom", () => {
    const component = shallow(<Card spaceAfter={SPACINGS_AFTER.NORMAL} />);
    expect(component).toHaveStyleRule("margin-bottom", defaultTokens.orbit.spaceSmall);
  });
  it("should have data-test", () => {
    const dataTest = "test";
    const component = shallow(<Card dataTest={dataTest} />);
    expect(component.render().prop("data-test")).toBe(dataTest);
  });
  it("should be closable", () => {
    const onClose = jest.fn();
    const component = shallow(<Card onClose={onClose} closable />);
    const ButtonLink = component.find("ButtonLink");
    expect(ButtonLink.prop("dataTest")).toBe(CLOSE_BUTTON_DATA_TEST);
    ButtonLink.simulate("click");
    expect(onClose).toHaveBeenCalled();
  });
});
