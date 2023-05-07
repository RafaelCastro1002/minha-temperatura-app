import { Dispatch } from "react";
import { Action, ActionType } from "./UserReducer";
import { LocationType } from "../@types/location";

export const setLocation = (
  dispatch: Dispatch<Action>,
  location: Partial<LocationType>
) => {
  return dispatch({
    payload: location,
    type: ActionType.SET_LOCATION,
  });
};
