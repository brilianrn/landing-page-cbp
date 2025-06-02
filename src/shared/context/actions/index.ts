import { SET_ACTIVE_MENU } from "./constants";

export const setActiveMenu = (payload: string) => {
  return { type: SET_ACTIVE_MENU, payload };
};
