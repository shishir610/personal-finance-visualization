import {
  ADD_MAIN,
  ADD_SIDE_HUSTLES,
  MAIN_TITLE_CHANGE,
  SIDE_HUSTLES_TITLE_CHANGE,
} from "../actions";

let initialState = {
  main: [{ name: "newVar" }],
  sideHustles: [{ name: "newVar" }],
};

const incomeReducer = (
  previousState = initialState,
  action: { type: string; payload: any }
) => {
  const { type, payload } = action;
  if (
    payload !== undefined &&
    payload.index !== undefined &&
    payload.varName !== undefined
  ) {
    var { index, varName } = payload;
  }
  switch (type) {
    case ADD_MAIN:
      return {
        ...previousState,
        main: [
          {
            name: payload.name,
            vals: payload.vals,
          },
          ...previousState.main,
        ],
      };
    case ADD_SIDE_HUSTLES:
      return {
        ...previousState,
        sideHustles: [
          {
            name: payload.name,
            vals: payload.vals,
          },
          ...previousState.sideHustles,
        ],
      };
    case MAIN_TITLE_CHANGE:
      let { main } = previousState;
      index = parseInt(index);
      let mainChange = main;
      mainChange[index]["name"] = varName;
      return {
        ...previousState,
        main: mainChange,
      };
    case SIDE_HUSTLES_TITLE_CHANGE:
      let { sideHustles } = previousState;
      index = parseInt(index);
      let sideHustlesChange = sideHustles;
      sideHustlesChange[index]["name"] = varName;
      return {
        ...previousState,
        sideHustles: sideHustlesChange,
      };
    default:
      return previousState;
  }
};

export default incomeReducer;
