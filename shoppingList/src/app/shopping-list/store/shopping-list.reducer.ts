import { Action } from '@ngrx/store';
import { Ingredient } from '../../shared/ingredient.model';
import { AddIngredient, ADD_INGREDIENT } from './shopping-list.actions';

export type ShoppingListReducerType = {
  ingredients : Ingredient[]
}

const initialState : ShoppingListReducerType = {
  ingredients: [new Ingredient('Apples', 5), new Ingredient('Tomatoes', 10)],
};

export function ShoppingListReducer(
  state = initialState,
  action: AddIngredient
) {
  switch (action.type) {
    case ADD_INGREDIENT:
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload],
      };
     default:
      return state; 
  }
}
