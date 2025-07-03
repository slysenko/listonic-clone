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
    template: '<AvailableProduct :productName="args.productName" :uiState="args.uiState" />',
  }),
} satisfies Meta<typeof AvailableProduct>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    productName: "Apple",
    uiState: {
      counter: 0,
      isSelected: false,
      showAddButton: true,
      showDeleteButton: false,
      showCounter: false,
      addButtonIcon: "primary",
      deleteButtonIcon: "decrement",
    },
  },
};
