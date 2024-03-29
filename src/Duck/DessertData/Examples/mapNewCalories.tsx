import IDessert from "../../../Interfaces/IDessert";

const min = 100,
  max = 500;

export const mapNewCalories = (items: Array<IDessert>) =>
  items.map((dessert: IDessert) => {
    const cloneDessert = { ...dessert };
    cloneDessert.calories = Math.floor(Math.random() * (max - min) + min);
    return cloneDessert;
  });
