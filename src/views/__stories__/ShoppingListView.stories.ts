import type { Meta, StoryObj } from "@storybook/vue3-vite";
// import { expect, userEvent, within } from "storybook/test";
import { useRouter, useRoute } from "vue-router";
import ShoppingListView from "../ShoppingListView.vue";

const meta = {
  title: "views/ShoppingListView",
  component: ShoppingListView,
  render: () => ({
    components: { ShoppingListView },
    setup() {
      const route = useRoute();
      const router = useRouter();
      // router.replace("/list/1");
      router.replace({
        path: "/lists/1",
        // params: { id: 1 },
      });
      console.log(route);
    },
    template: "<RouterView><ShoppingListView /></RouterView>",
  }),
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ShoppingListView>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
