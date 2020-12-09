import { combineReducers } from "redux";
import { questionsReducer as questions } from "./questionsReducer";
export const rootReducer = combineReducers({
  questions,
});
