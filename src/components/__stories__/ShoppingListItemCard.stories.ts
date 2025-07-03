import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { useProductsStore } from "../../stores/products.ts";

import ShoppingListItemCard from "../ShoppingListItemCard.vue";

const meta = {
  title: "components/ShoppingListItemCard",
  component: ShoppingListItemCard,
  render: (args: unknown) => ({
    components: { ShoppingListItemCard },
    setup() {
      return { args };
    },
    template: "<ShoppingListItemCard :data='args.data' />",
  }),
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ShoppingListItemCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: {
      name: "Test List",
      id: 1,
      itemsCount: 0,
      deleted: false,
      active: true,
    },
  },
  play: async () => {
    const store = useProductsStore();
    store.createNewShoppingList("test");
  },
};
