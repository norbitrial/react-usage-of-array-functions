import IDessert from "../../../Interfaces/IDessert";

export const filterByString = (items: Array<IDessert>, value: string) =>
  items.filter(
    ({ name, description }: IDessert) =>
      name.toUpperCase().includes(value.toUpperCase()) ||
      description.toUpperCase().includes(value.toUpperCase())
  );
