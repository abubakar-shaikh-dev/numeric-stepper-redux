import { combineReducers } from "redux";
import { stepper } from "./stepper";

export const rootReducer = combineReducers({
    stepper:stepper
})