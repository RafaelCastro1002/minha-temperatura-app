import { Dispatch, ReactNode, createContext, useReducer } from "react";
import { LocationType } from "../@types/location";
import UserReducer, { Action } from "./UserReducer";

type InitialStateType = {
  location: Partial<LocationType>;
};

const initialState: InitialStateType = {
  location: {
    hasError: false,
    pending: true,
  },
};

type UserContextType = {
  state: InitialStateType;
  dispatch: Dispatch<Action>;
};

const UserContext = createContext<UserContextType>({
  dispatch: () => null,
  state: initialState,
});

type UserContextProps = {
  children: ReactNode;
};

export const UserContextProvider = ({ children }: UserContextProps) => {
  const [state, dispatch] = useReducer(UserReducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
