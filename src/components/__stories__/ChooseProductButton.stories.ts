import type { Meta, StoryObj } from "@storybook/vue3-vite";

import ChooseProductButton from "../ChooseProductButton.vue";

const meta = {
  title: "components/ChooseProductButton",
  component: ChooseProductButton,
  tags: ["autodocs"],
  render: (args: unknown) => ({
    components: { ChooseProductButton },
    setup() {
      return { args };
    },
    template: '<ChooseProductButton :name="args.name" />',
  }),
} satisfies Meta<typeof ChooseProductButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    name: "Apple",
  },
};
