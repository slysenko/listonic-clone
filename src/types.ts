type ProductItem = {
  name: string;
  categoryId: Category["id"];
  counter: number;
  unit: string;
  price: number | null;
  description: string;
  selected: boolean;
};

type Category = {
  id: number;
  name: string;
};

export type { ProductItem, Category };
