import IDessert from "../../../Interfaces/IDessert";

export const filterByBoolean = (items: Array<IDessert>, checked: boolean) =>
  items.filter((dessert: IDessert) => dessert.hasChocolate === checked);
