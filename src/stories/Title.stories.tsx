import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Title from "./Title";

export default {
  title: "Atom/Title",
  component: Title,
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = (args) => <Title {...args} />;

export const SmallTitle = Template.bind({});

SmallTitle.args = {
  size: "small",
  title: "Small Title",
};

export const MediumTitle = Template.bind({});

MediumTitle.args = {
  size: "medium",
  title: "Medium Title",
};

export const LargeTitle = Template.bind({});

LargeTitle.args = {
  size: "large",
  title: "Large Title",
};
