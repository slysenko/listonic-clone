import type { Meta, StoryObj } from "@storybook/vue3-vite";

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
    },
  },
};
