interface IDessert {
  id: Number;
  name: string;
  calories: number;
  description: string;
  type: string;
  hasChocolate: boolean;
  image?: string;
  ingredients: Array<number>;
}

export default IDessert;
