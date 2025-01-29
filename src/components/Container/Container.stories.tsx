import { StoryFn, Meta } from "@storybook/react";
import Container from "./Container";

export default {
  title: "Container",
  component: Container,
} as Meta<typeof Container>;

const Template: StoryFn<typeof Container> = (args: any) => <Container {...args} />;

export const ContainerTest = Template.bind({});
ContainerTest.args = {
    title: "Default theme",
    theme: "primary",
    testIdPrefix: "container",
};