import type { Meta, StoryObj } from "@storybook/vue3-vite";

import ProductsList from "../ProductsList.vue";

const meta = {
  title: "components/ProductsList",
  component: ProductsList,
  render: (args: any) => ({
    components: { ProductsList },
    template: "<ProductsList />",
  }),
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ProductsList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
