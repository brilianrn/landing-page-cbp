/* eslint-disable @typescript-eslint/no-explicit-any */
import { sectionRoute } from "@/shared/constants/routes";
import { SET_ACTIVE_MENU } from "../actions/constants";

export const initialState: any = {
  activeMenu: sectionRoute.home,
};

export const reducer = (
  state: any,
  actions = {
    type: "",
    payload: undefined,
  }
) => {
  const { type, payload } = actions;
  switch (type) {
    case SET_ACTIVE_MENU:
      return { ...state, activeMenu: payload };
    default:
      throw new Error();
  }
};
