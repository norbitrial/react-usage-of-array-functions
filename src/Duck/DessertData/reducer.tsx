import types from "./types";
import Consts from "../../Consts";
import IState from "../../Interfaces/IState";
import { filterByString } from "./Examples/filterByString";
import { filterByBoolean } from "./Examples/filterByBoolean";
import { sumWithReduce } from "./Examples/sumWithReduce";
import { findByName } from "./Examples/findByName";
import { haveSomeOfThem } from "./Examples/haveSomeOfThem";
import { mapNewCalories } from "./Examples/mapNewCalories";
import { deleteItem } from "./Examples/deleteItem";

const initialState: IState = {
  items: Consts.DessertList,
  sumOfCalories: 0,
  isTrueStatement: false,
};

export default function reducer(state = initialState, action: any) {
  switch (action.type) {
    case types.FILTER_BY_STRING:
      return {
        ...state,
        items: filterByString(Consts.DessertList, action.payload),
      };
    case types.FILTER_BY_BOOLEAN:
      return {
        ...state,
        items: filterByBoolean(Consts.DessertList, action.payload),
      };
    case types.SUM_WITH_REDUCE:
      return {
        ...state,
        sumOfCalories: sumWithReduce(Consts.DessertList),
      };
    case types.FIND_BY_NAME:
      return {
        ...state,
        items: [findByName(Consts.DessertList, action.payload)],
      };
    case types.HAVE_SOME_OF_THEM:
      return {
        ...state,
        isTrueStatement: haveSomeOfThem(Consts.DessertList, action.payload.id),
      };
    case types.MAP_NEW_CALORIES:
      return {
        ...state,
        items: mapNewCalories(Consts.DessertList),
      };
    case types.DELETE_ITEM:
      return {
        ...state,
        items: deleteItem(state.items, action.payload),
      };
    case types.RESET_STATE:
      return {
        ...initialState,
      };
    default:
      return state;
  }
}
