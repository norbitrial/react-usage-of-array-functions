import IDessert from "../../../Interfaces/IDessert";

export const filterByName = (items: Array<IDessert>, name: string) =>
  items.filter((dessert: IDessert) =>
    dessert.name.toUpperCase().includes(name.toUpperCase())
  );
