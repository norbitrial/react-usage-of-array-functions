import types from "./types";
import Consts from "../../Consts";
import IState from "../../Interfaces/IState";

const initialState: IState = {
  items: Consts.DessertList,
};

export default function reducer(state = initialState, action: any) {
  switch (action.type) {
    case types.RESET_DESSERT_LIST:
      return {
        items: initialState.items,
      };
    case types.UPDATE_DESSERT_LIST:
      return {
        items: action.payload,
      };
    default:
      return state;
  }
}
