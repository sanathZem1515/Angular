import { ActionReducerMap } from '@ngrx/store';
import * as fromAuthList from '../auth/store/auth.reducer';
import * as fromShoppingList from '../shopping-list/store/shopping-list.reducer';

export interface AppState {
  shoppingList: fromShoppingList.ShoppingListReducerType;
  auth: fromAuthList.AuthReducerType;
}

export const appReducer: ActionReducerMap<AppState> = {
  shoppingList: fromShoppingList.ShoppingListReducer,
  auth: fromAuthList.authReducer,
};
