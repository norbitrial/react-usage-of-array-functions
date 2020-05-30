import IDessert from "../../../Interfaces/IDessert";

export const deleteItem = (items: Array<IDessert>, value: string) => {
  const cloneItems = [...items];
  const index = cloneItems.findIndex(({ name }: IDessert) => name === value);

  if (index !== -1) cloneItems.splice(index, 1);

  return cloneItems;
};
