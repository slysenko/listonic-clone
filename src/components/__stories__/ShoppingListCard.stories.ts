import type { Meta, StoryObj } from "@storybook/vue3-vite";

import ShoppingListCard from "../ShoppingListCard.vue";

const meta = {
  title: "components/ShoppingListCard",
  component: ShoppingListCard,
  render: (args: any) => ({
    components: { ShoppingListCard },
    setup() {
      return { args };
    },
    template: "<ShoppingListCard :data='args.data' />",
  }),
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ShoppingListCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: {
      name: "Test List",
    },
  },
};
