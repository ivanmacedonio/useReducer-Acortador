import React from "react";
import { add, addView, load } from "./actions";
import { useReducer } from "react";

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return add(state, action);
    case "LOAD":
      return load();
    case "LOAD_VIEW":
      return addView();

    default:
  }
};

export default function useReducerApp() {
  return useReducer(reducer, { items: [] });
}
