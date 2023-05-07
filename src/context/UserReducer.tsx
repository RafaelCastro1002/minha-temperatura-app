import { LocationType } from "../@types/location";

export enum ActionType {
  SET_LOCATION = "SET_LOCATION",
}

export type Action = {
  type: ActionType;
  payload: Partial<LocationType>;
};

export type State = {
  location: Partial<LocationType>;
};

const UserReducer = (state: State, action: Action): State => {
  const { payload, type } = action;

  switch (type) {
    case ActionType.SET_LOCATION:
      return {
        ...state,
        location: payload,
      };
    default:
      throw new Error();
  }
};

export default UserReducer;
