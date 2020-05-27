import IDessert from "../../../Interfaces/IDessert";

export const findByName = (items: Array<IDessert>, name: string) =>
  items.find((dessert: IDessert) => dessert.name === name);
