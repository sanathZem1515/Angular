import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(name: string, amount: number) {
    let newIngredient = new Ingredient(name, amount);
    this.ingredients.push(newIngredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    // for(let ingredient of ingredients) {
    //     this.addIngredient(ingredient);
    // }

    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
