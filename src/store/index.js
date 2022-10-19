import {createStore} from "redux";
import {rootReducers} from "./RootReducers";

export const store = createStore(rootReducers)