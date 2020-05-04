import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { reducer } from "../reducers/Reducer";

export const store = createStore(reducer, applyMiddleware(thunk));
