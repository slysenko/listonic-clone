type ProductItem = {
  name: string;
  categoryId: Category["id"];
  counter: number;
  unit: string;
  price: number;
  description: string;
};

type Category = {
  id: number;
  name: string;
};

export type { ProductItem, Category };
