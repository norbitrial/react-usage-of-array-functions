import types from "./types";
import Consts from "../../Consts";
import IState from "../../Interfaces/IState";
import { filterByName } from "./Examples/filterByName";
import { filterByBoolean } from "./Examples/filterByBoolean";

const initialState: IState = {
  items: Consts.DessertList,
};

export default function reducer(state = initialState, action: any) {
  switch (action.type) {
    case types.FILTER_BY_NAME:
      return {
        items: filterByName(Consts.DessertList, action.payload),
      };
    case types.FILTER_BY_BOOLEAN:
      return {
        items: filterByBoolean(Consts.DessertList, action.payload),
      };
    case types.RESET_DESSERT_LIST:
      return {
        items: initialState.items,
      };
    default:
      return state;
  }
}
