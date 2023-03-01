import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {



  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(name:string,amount:number) {
    let newIngredient = new Ingredient(name,amount);
    this.ingredients.push(newIngredient);
  }
}