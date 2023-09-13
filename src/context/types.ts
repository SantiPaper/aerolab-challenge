export type Product = {
  img: {
    url: string;
    hdUrl: string;
  };
  _id: string;
  name: string;
  cost: number;
  category: string;
};

export type ContextValue = {
  products: Array<Product>;
  setProducts: React.Dispatch<React.SetStateAction<Array<Product>>>;
  points: number;
  addPoints: (points: number) => void;
  removePoints: (points: number) => void;
};
