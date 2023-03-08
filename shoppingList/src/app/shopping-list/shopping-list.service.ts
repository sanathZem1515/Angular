import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  startedEditing = new Subject<number>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(index:number) {
    return this.ingredients[index];
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

  updateIngredient(index:number,newIngredient:Ingredient) {
    console.log("updating ..");
    
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());

    console.log("updated ...");
    
  }

  deleteIngredient(index:number) {
    this.ingredientsChanged.next(this.ingredients.splice(index,1));
  }
}
