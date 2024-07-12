export type ProductType = {
  id: number;
  name: string;
  status: "active" | "inactive" | "archived";
  image_url: string;
  price: string;
  stock: number;
  available_at: Date;
};

export type Customer = {
  id: number;
  name: string;
  username: string;
  email: string;
};
