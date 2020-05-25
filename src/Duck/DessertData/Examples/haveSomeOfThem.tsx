import IDessert from "../../../Interfaces/IDessert";

export const haveSomeOfThem = (items: Array<IDessert>, ingredientId: number) =>
  items.some(({ ingredients }: IDessert) => ingredients.includes(ingredientId));
