import { combineReducers } from "redux";
import dessertReducer from "./DessertData/reducer";

const reducers = combineReducers({ dessertReducer });

export default {
  reducers,
};
