import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is test',
      'https://images.immediate.co.uk/production/volatile/sites/30/2022/10/Campfire-stew-afe40d7.jpg',
      [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]
    ),
    new Recipe(
      'A Test Recipe 2',
      'This is test 2',
      'https://images.immediate.co.uk/production/volatile/sites/30/2022/10/Campfire-stew-afe40d7.jpg',
      [(new Ingredient('Buns', 2), new Ingredient('Meat', 1))]
    ),
  ];

  constructor(private shoppingListService:ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients:Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
