// @flow
import * as React from "react";
import { storiesOf, setAddon } from "@storybook/react";
import styles from "@sambego/storybook-styles";
import { action } from "@storybook/addon-actions";
import chaptersAddon from "react-storybook-addon-chapters";
import { withKnobs, text, number, boolean } from "@storybook/addon-knobs/react";

import Stepper from "./index";

setAddon(chaptersAddon);

storiesOf("Stepper", module)
  .addDecorator(withKnobs)
  .addDecorator(
    styles({
      padding: "20px",
    }),
  )
  .addWithChapters("Playground", () => {
    const min = number("minValue", 1);
    const max = number("maxValue", 10);
    const step = number("step", 2);
    const defaultValue = number("defaultValue", 4);
    const name = text("Name", "name");
    const disabled = boolean("disabled", false);
    const dataTest = text("dataTest", "test");
    return {
      info: "Some description about this type of InputStepper in general.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <Stepper
                  defaultValue={defaultValue}
                  step={step}
                  name={name}
                  maxValue={max}
                  minValue={min}
                  disabled={disabled}
                  dataTest={dataTest}
                  onChange={action("onChange")}
                  onFocus={action("onFocus")}
                  onBlur={action("onBlur")}
                />
              ),
            },
          ],
        },
      ],
    };
  });
