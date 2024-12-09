import type { Meta, StoryObj, ArgTypes } from "@storybook/vue3";
import { fn, within, userEvent, expect } from "@storybook/test";
import { ZqButton } from "zq-ui";

type Story = StoryObj<typeof ZqButton> & { argTypes?: ArgTypes };

//定义组件props和emits
const meta: Meta<typeof ZqButton> = {
  title: "Example/Button",
  component: ZqButton,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["primary", "success", "warning", "danger", "info", ""],
    },
    size: {
      control: { type: "select" },
      options: ["large", "default", "small", ""],
    },
    disabled: {
      control: "boolean",
    },
    loading: {
      control: "boolean",
    },
    useThrottle: {
      control: "boolean",
    },
    throttleDuration: {
      control: "number",
    },
    autofocus: {
      control: "boolean",
    },
    tag: {
      control: { type: "select" },
      options: ["button", "a", "div"],
    },
    nativeType: {
      control: { type: "select" },
      options: ["button", "submit", "reset", ""],
    },
    icon: {
      control: { type: "text" },
    },
    loadingIcon: {
      control: { type: "text" },
    },
  },
  args: { onClick: fn() },
};

const container = (val: string) => `
  <div style="margin:5px">
    ${val}
  </div>
`;

export const Default: Story & { args: { content: string } } = {
  argTypes: {
    content: {
      control: { type: "text" }, //默认内容
    },
  },
  args: {
    type: "primary",
    content: "Button",
    size: "small",
  },
  render: (args) => ({
    components: { ZqButton },
    setup() {
      return { args };
    },
    template: container(
      `<zq-button v-bind="args">{{args.content}}</zq-button>`
    ),
  }),
};

export default meta;
