// @flow
import * as React from "react";
import { mount } from "enzyme";

import FloatingCard from "../index";
import Card from "../../Card";
import CardSection from "../../Card/CardSection";
import Heading from "../../Heading";
import Text from "../../Text";

// TODO: write proper tests

const text = "Text for testing";

const component = mount(
  <FloatingCard>
    <Card>
      <CardSection>
        <Heading type="title3" element="h3">
          {text}
        </Heading>
        <Text>{text}</Text>
      </CardSection>
    </Card>
  </FloatingCard>,
);

describe("Floating Card", () => {
  const componentName = "FloatingCard__";
  const floatingWrapper = component.find(`${componentName}FloatingWrapper`);

  it("should call scrollHandler", () => {
    floatingWrapper.simulate("scroll");
    component.update();
    expect(component).toMatchSnapshot();
  });

  it("should match snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});
