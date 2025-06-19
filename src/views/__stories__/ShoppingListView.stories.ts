import type { Meta, StoryObj } from "@storybook/vue3-vite";

// import { expect, userEvent, within } from "storybook/test";

import ShoppingListView from "../ShoppingListView.vue";

const meta = {
  title: "views/ShoppingListView",
  component: ShoppingListView,
  render: () => ({
    components: { ShoppingListView },
    template: "<ShoppingListView />",
  }),
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ShoppingListView>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
