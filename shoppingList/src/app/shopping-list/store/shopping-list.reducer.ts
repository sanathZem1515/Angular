import { Ingredient } from '../../shared/ingredient.model';
import * as ShoppingListActions from './shopping-list.actions';

export interface ShoppingListReducerType {
  ingredients: Ingredient[];
  editedIngredient: Ingredient;
  editedItemIndex: number;
}

export interface AppState {
  shoppingList: ShoppingListReducerType;
}

const initialState: ShoppingListReducerType = {
  ingredients: [new Ingredient('Apples', 5), new Ingredient('Tomatoes', 10)],
  editedIngredient: null,
  editedItemIndex: -1,
};

export function ShoppingListReducer(
  state = initialState,
  action: ShoppingListActions.ShoppingListActions
) {
  switch (action.type) {
    case ShoppingListActions.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload],
      };
    case ShoppingListActions.ADD_INGREDIENTS:
      return {
        ...state,
        ingredients: [...state.ingredients, ...action.payload],
      };
    case ShoppingListActions.UPDATE_INGREDIENT:
      const ingredient = state.ingredients[state.editedItemIndex];
      const updateIngredient = {
        ...ingredient,
        ...action.payload,
      };

      const updatedIngredients = [...state.ingredients];
      updatedIngredients[state.editedItemIndex] = updateIngredient;
      return {
        ...state,
        ingredients: updatedIngredients,
        editedIngredient: null,
        editedItemIndex: -1,
      };
    case ShoppingListActions.DELETE_INGREDIENT:
      return {
        ...state,
        ingredients: state.ingredients.filter(
          (value, index) => index !== state.editedItemIndex
        ),
        editedIngredient: null,
        editedItemIndex: -1,
      };
    case ShoppingListActions.START_EDIT:
      return {
        ...state,
        editedItemIndex: action.payload,
        editedIngredient: { ...state.ingredients[action.payload] },
      };
    case ShoppingListActions.STOP_EDIT:
      return {
        ...state,
        editedIngredient: null,
        editedItemIndex: -1,
      };
    default:
      return state;
  }
}
