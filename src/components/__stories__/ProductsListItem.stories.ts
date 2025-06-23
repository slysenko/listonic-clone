import type { Meta, StoryObj } from "@storybook/vue3-vite";

import ProductsListItem from "../ProductsListItem.vue";

const meta = {
  title: "components/ProductsListItem",
  component: ProductsListItem,
  render: (args: unknown) => ({
    components: { ProductsListItem },
    setup() {
      return { args };
    },
    template: "<ProductsListItem :product='args.product' />",
  }),
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ProductsListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    product: {
      name: "Test",
      categoryId: 12345,
      counter: 4,
      unit: 2,
      price: 3.44,
      description: "some description",
    },
  },
};
