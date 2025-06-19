import type { Meta, StoryObj } from "@storybook/vue3-vite";

import HomeView from "../HomeView.vue";

const meta = {
  title: "views/HomeView",
  component: HomeView,
  render: () => ({
    components: { HomeView },
    template: "<HomeView />",
  }),
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof HomeView>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
