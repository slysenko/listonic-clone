import type { Meta, StoryObj } from "@storybook/vue3-vite";

import AvailableProduct from "../AvailableProduct.vue";

const meta = {
  title: "components/AvailableProduct",
  component: AvailableProduct,
  tags: ["autodocs"],
  render: (args: unknown) => ({
    components: { AvailableProduct },
    setup() {
      return { args };
    },
    template: '<AvailableProduct :name="args.name" />',
  }),
} satisfies Meta<typeof AvailableProduct>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    name: "Apple",
  },
};
