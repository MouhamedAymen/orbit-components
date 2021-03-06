// @flow
import * as React from "react";
import { mount } from "enzyme";

import Stack from "../index";
import InputField from "../../InputField";
import Button from "../../Button";
import { ALIGNS, DIRECTIONS, JUSTIFY, SPACINGS } from "../consts";
import SPACINGS_AFTER from "../../common/getSpacingToken/consts";
import defaultTokens from "../../defaultTokens";

describe("Default Stack", () => {
  const spacing = SPACINGS.EXTRALOOSE;
  const spaceAfter = SPACINGS_AFTER.LARGE;
  const component = mount(
    <Stack spacing={spacing} spaceAfter={spaceAfter}>
      <InputField type="password" label="Password" help="You need some help!" />
      <Button>Sign In</Button>
    </Stack>,
  );
  const stack = component.find("Stack__StyledStack");

  it("should have passed props", () => {
    expect(stack.prop("spacing")).toBe(spacing);
    expect(stack.prop("spaceAfter")).toBe(spaceAfter);
  });
  it("should contain children", () => {
    expect(stack.find("InputField").exists()).toBe(true);
    expect(stack.find("Button").exists()).toBe(true);
  });
  it("should not contain styles", () => {
    expect(stack).not.toHaveStyleRule("display", expect.any(String));
    expect(stack).not.toHaveStyleRule("flex-direction", expect.any(String));
    expect(stack).not.toHaveStyleRule("flex-wrap", expect.any(String));
    expect(stack).not.toHaveStyleRule("flex-shrink", expect.any(String));
    expect(stack).not.toHaveStyleRule("flex-grow", expect.any(String));
    expect(stack).not.toHaveStyleRule("flex-basis", expect.any(String));
    expect(stack).not.toHaveStyleRule("justify-content", expect.any(String));
    expect(stack).not.toHaveStyleRule("align-items", expect.any(String));
    expect(stack).not.toHaveStyleRule("align-content", expect.any(String));
  });
  it("should contain styles", () => {
    expect(stack).toHaveStyleRule("width", "100%");
    expect(stack).toHaveStyleRule("margin-bottom", defaultTokens.orbit.spaceLarge);
    expect(stack).toHaveStyleRule("margin", "0 0 36px 0!important", {
      modifier: "& > *",
    });
    expect(stack).toHaveStyleRule("margin", "0 0 40px 0!important", {
      media: "(min-width:600px)",
      modifier: "& > *",
    });
  });
  it("should match snapshot", () => {
    expect(stack).toMatchSnapshot();
  });
});

describe("Stack with flex prop", () => {
  const component = mount(
    <Stack flex>
      <InputField type="password" label="Password" help="You need some help!" />
      <Button>Sign In</Button>
    </Stack>,
  );
  const stack = component.find("Stack__StyledStack");

  it("should have passed props", () => {
    expect(stack.prop("flex")).toBe(true);
  });
  it("should contain styles", () => {
    expect(stack).toHaveStyleRule("display", "flex");
    expect(stack).toHaveStyleRule("width", "100%");
    expect(stack).toHaveStyleRule("flex-direction", "row");
    expect(stack).toHaveStyleRule("flex-wrap", "nowrap");
    expect(stack).toHaveStyleRule("flex-shrink", "0");
    expect(stack).toHaveStyleRule("flex-grow", "1");
    expect(stack).toHaveStyleRule("justify-content", "flex-start");
    expect(stack).toHaveStyleRule("align-items", "flex-start");
    expect(stack).toHaveStyleRule("align-content", "flex-start");
    expect(stack).toHaveStyleRule("margin", "0 16px 0 0!important", {
      modifier: "& > *",
    });
  });
  it("should match snapshot", () => {
    expect(stack).toMatchSnapshot();
  });
});

describe("Stack with enabled flex", () => {
  const inline = false;
  const direction = DIRECTIONS.ROW;
  const wrap = false;
  const shrink = true;
  const grow = false;
  const basis = "550px";
  const align = ALIGNS.CENTER;
  const justify = JUSTIFY.CENTER;
  const spaceAfter = SPACINGS_AFTER.LARGE;
  const spacing = SPACINGS.NATURAL;
  const desktop = {
    inline: true,
    direction: DIRECTIONS.COLUMN,
    wrap: true,
    shrink: false,
    grow: true,
    basis: "auto",
    align: ALIGNS.START,
    justify: JUSTIFY.END,
    spaceAfter: SPACINGS_AFTER.SMALL,
    spacing: SPACINGS.COMPACT,
  };

  const component = mount(
    <Stack
      inline={inline}
      direction={direction}
      wrap={wrap}
      shrink={shrink}
      grow={grow}
      basis={basis}
      align={align}
      justify={justify}
      spaceAfter={spaceAfter}
      spacing={spacing}
      desktop={desktop}
    >
      <InputField type="password" label="Password" help="You need some help!" />
      <Button>Sign In</Button>
    </Stack>,
  );
  const stack = component.find("Stack__StyledStack");
  it("should have passed props", () => {
    expect(stack.prop("inline")).toBe(inline);
    expect(stack.prop("direction")).toBe(direction);
    expect(stack.prop("wrap")).toBe(wrap);
    expect(stack.prop("shrink")).toBe(shrink);
    expect(stack.prop("grow")).toBe(grow);
    expect(stack.prop("basis")).toBe(basis);
    expect(stack.prop("align")).toBe(align);
    expect(stack.prop("justify")).toBe(justify);
    expect(stack.prop("spaceAfter")).toBe(spaceAfter);
    expect(stack.prop("spacing")).toBe(spacing);
    expect(stack.prop("desktop")).toBe(desktop);
  });
  it("should contain styles", () => {
    expect(stack).toHaveStyleRule("display", "flex");
    expect(stack).toHaveStyleRule("width", "100%");
    expect(stack).toHaveStyleRule("flex-direction", "row");
    expect(stack).toHaveStyleRule("flex-wrap", "nowrap");
    expect(stack).toHaveStyleRule("flex-shrink", "1");
    expect(stack).toHaveStyleRule("flex-grow", "0");
    expect(stack).toHaveStyleRule("flex-basis", "550px");
    expect(stack).toHaveStyleRule("justify-content", "center");
    expect(stack).toHaveStyleRule("align-items", "center");
    expect(stack).toHaveStyleRule("align-content", "center");
    expect(stack).toHaveStyleRule("margin-bottom", defaultTokens.orbit.spaceLarge);
    expect(stack).toHaveStyleRule("margin", "0 16px 0 0!important", {
      modifier: "& > *",
    });
  });
  it("should contain desktop styles", () => {
    expect(stack).toHaveStyleRule("display", "inline-flex", {
      media: "(min-width:600px)",
    });
    expect(stack).not.toHaveStyleRule("width", expect.any(String), {
      media: "(min-width:600px)",
    });
    expect(stack).toHaveStyleRule("flex-direction", "column", {
      media: "(min-width:600px)",
    });
    expect(stack).toHaveStyleRule("flex-wrap", "wrap", {
      media: "(min-width:600px)",
    });
    expect(stack).toHaveStyleRule("flex-shrink", "0", {
      media: "(min-width:600px)",
    });
    expect(stack).toHaveStyleRule("flex-grow", "1", {
      media: "(min-width:600px)",
    });
    expect(stack).toHaveStyleRule("flex-basis", "auto", {
      media: "(min-width:600px)",
    });
    expect(stack).toHaveStyleRule("align-content", "flex-start", {
      media: "(min-width:600px)",
    });
    expect(stack).toHaveStyleRule("justify-content", "flex-end", {
      media: "(min-width:600px)",
    });
    expect(stack).toHaveStyleRule("align-items", "flex-start", {
      media: "(min-width:600px)",
    });
    expect(component).toHaveStyleRule("margin-bottom", defaultTokens.orbit.spaceXSmall, {
      media: "(min-width:600px)",
    });
    expect(stack).toHaveStyleRule("margin", "0 0 12px 0!important", {
      media: "(min-width:600px)",
      modifier: "& > *",
    });
  });
  it("should match snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});

describe("Stack with only desktop properties", () => {
  const desktop = {
    inline: true,
    direction: DIRECTIONS.COLUMN,
    wrap: true,
    shrink: true,
    grow: false,
    basis: "auto",
    align: ALIGNS.START,
    justify: JUSTIFY.END,
    spaceAfter: SPACINGS_AFTER.SMALL,
    spacing: SPACINGS.COMPACT,
  };

  const component = mount(
    <Stack desktop={desktop}>
      <InputField type="password" label="Password" help="You need some help!" />
      <Button>Sign In</Button>
    </Stack>,
  );
  const stack = component.find("Stack__StyledStack");
  it("should have passed props", () => {
    expect(stack.prop("desktop")).toBe(desktop);
  });
  it("should contain styles", () => {
    expect(stack).toHaveStyleRule("display", "flex");
    expect(stack).toHaveStyleRule("flex-direction", "row");
    expect(stack).toHaveStyleRule("flex-wrap", "nowrap");
    expect(stack).toHaveStyleRule("flex-shrink", "0");
    expect(stack).toHaveStyleRule("flex-grow", "1");
    expect(stack).toHaveStyleRule("justify-content", "flex-start");
    expect(stack).toHaveStyleRule("align-items", "flex-start");
    expect(stack).toHaveStyleRule("align-content", "flex-start");
    expect(stack).toHaveStyleRule("margin", "0 16px 0 0!important", {
      modifier: "& > *",
    });
  });
  it("should contain desktop styles", () => {
    expect(stack).toHaveStyleRule("display", "inline-flex", {
      media: "(min-width:600px)",
    });
    expect(stack).toHaveStyleRule("flex-wrap", "wrap", {
      media: "(min-width:600px)",
    });
    expect(stack).toHaveStyleRule("flex-shrink", "1", {
      media: "(min-width:600px)",
    });
    expect(stack).toHaveStyleRule("flex-grow", "0", {
      media: "(min-width:600px)",
    });
    expect(stack).toHaveStyleRule("flex-basis", "auto", {
      media: "(min-width:600px)",
    });
    expect(stack).toHaveStyleRule("justify-content", "flex-end", {
      media: "(min-width:600px)",
    });
    expect(stack).toHaveStyleRule("margin-bottom", defaultTokens.orbit.spaceXSmall, {
      media: "(min-width:600px)",
    });
    expect(stack).toHaveStyleRule("margin", "0 0 12px 0!important", {
      media: "(min-width:600px)",
      modifier: "& > *",
    });
  });
});

describe("Stack with same mobile and desktop properties", () => {
  const inline = true;
  const direction = DIRECTIONS.ROW;
  const wrap = true;
  const grow = true;
  const shrink = true;
  const basis = "auto";
  const align = ALIGNS.END;
  const justify = JUSTIFY.END;
  const spaceAfter = SPACINGS_AFTER.LARGE;
  const spacing = SPACINGS.EXTRALOOSE;
  const desktop = {
    inline,
    direction,
    wrap,
    shrink,
    grow,
    basis,
    align,
    justify,
    spaceAfter,
    spacing,
  };

  const component = mount(
    <Stack
      inline={inline}
      direction={direction}
      wrap={wrap}
      shrink={shrink}
      grow={grow}
      basis={basis}
      align={align}
      justify={justify}
      spaceAfter={spaceAfter}
      spacing={spacing}
      desktop={desktop}
    >
      <InputField type="password" label="Password" help="You need some help!" />
      <Button>Sign In</Button>
    </Stack>,
  );
  const stack = component.find("Stack__StyledStack");
  it("should have passed props", () => {
    expect(stack.prop("desktop")).toBe(desktop);
  });
  it("should contain styles", () => {
    expect(stack).toHaveStyleRule("display", "inline-flex");
    expect(stack).toHaveStyleRule("flex-direction", "row");
    expect(stack).toHaveStyleRule("flex-wrap", "wrap");
    expect(stack).toHaveStyleRule("flex-shrink", "1");
    expect(stack).toHaveStyleRule("flex-grow", "1");
    expect(stack).toHaveStyleRule("flex-basis", "auto");
    expect(stack).toHaveStyleRule("justify-content", "flex-end");
    expect(stack).toHaveStyleRule("align-items", "flex-end");
    expect(stack).toHaveStyleRule("align-content", "flex-end");
    expect(stack).toHaveStyleRule("margin-bottom", defaultTokens.orbit.spaceLarge);
    expect(stack).toHaveStyleRule("margin", "0 36px 0 0!important", {
      modifier: "& > *",
    });
  });
  it("should not contain desktop styles", () => {
    expect(stack).not.toHaveStyleRule("display", expect.any(String), {
      media: "(min-width:600px)",
    });
    expect(stack).not.toHaveStyleRule("width", expect.any(String), {
      media: "(min-width:600px)",
    });
    expect(stack).not.toHaveStyleRule("flex-direction", expect.any(String), {
      media: "(min-width:600px)",
    });
    expect(stack).not.toHaveStyleRule("flex-wrap", expect.any(String), {
      media: "(min-width:600px)",
    });
    expect(stack).not.toHaveStyleRule("flex-shrink", expect.any(String), {
      media: "(min-width:600px)",
    });
    expect(stack).not.toHaveStyleRule("flex-grow", expect.any(String), {
      media: "(min-width:600px)",
    });
    expect(stack).not.toHaveStyleRule("flex-basis", expect.any(String), {
      media: "(min-width:600px)",
    });
    expect(stack).not.toHaveStyleRule("justify-content", expect.any(String), {
      media: "(min-width:600px)",
    });
    expect(stack).not.toHaveStyleRule("align-items", expect.any(String), {
      media: "(min-width:600px)",
    });
    expect(stack).not.toHaveStyleRule("align-content", expect.any(String), {
      media: "(min-width:600px)",
    });
    expect(stack).not.toHaveStyleRule("margin-bottom", expect.any(String), {
      media: "(min-width:600px)",
    });
  });
  it("should contain desktop styles - only for spacing", () => {
    expect(stack).toHaveStyleRule("margin", "0 40px 0 0!important", {
      media: "(min-width:600px)",
      modifier: "& > *",
    });
  });
});
