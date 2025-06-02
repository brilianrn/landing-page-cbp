"use client";

import { createContext, ReactNode, useReducer } from "react";

import { initialState, reducer } from "./reducers";

const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { StateProvider, store };
