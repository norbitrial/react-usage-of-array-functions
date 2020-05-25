import IDessert from "../../../Interfaces/IDessert";

export const sumWithReduce = (items: Array<IDessert>) =>
  items.reduce(
    (accumulator: number, { calories: currentCalories }: IDessert) =>
      accumulator + currentCalories,
    0
  );
