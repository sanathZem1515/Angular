import { Action } from "@ngrx/store";
import { User } from "../user.model";

export interface AuthReducerType {
    user:User
}


const initialState : AuthReducerType = {
  user: null,
};

export function authReducer (state = initialState,actions:Action) {

}
