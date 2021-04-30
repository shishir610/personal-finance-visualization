import {
  ADD_MAIN,
  ADD_SIDE_HUSTLES,
  MAIN_TITLE_CHANGE,
  SIDE_HUSTLES_TITLE_CHANGE,
  MAIN_VARS_CHANGE,
  SIDE_HUSTLES_VARS_CHANGE,
} from "../actions";

let initialState = {
  main: [{ name: "newVar", vals: [0, 0, 0, 0, 0, 0] }],
  sideHustles: [{ name: "newVar", vals: [0, 0, 0, 0, 0, 0] }],
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
  var { main, sideHustles } = previousState;
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
      index = parseInt(index);
      let mainChange = main;
      mainChange[index]["name"] = varName;
      return {
        ...previousState,
        main: mainChange,
      };
    case SIDE_HUSTLES_TITLE_CHANGE:
      index = parseInt(index);
      let sideHustlesChange = sideHustles;
      sideHustlesChange[index]["name"] = varName;
      return {
        ...previousState,
        sideHustles: sideHustlesChange,
      };
    case MAIN_VARS_CHANGE:
      let mainValsChange = main;
      if (mainValsChange[payload.y]["vals"] !== undefined) {
        mainValsChange[payload.y]["vals"][payload.x] = payload.varName;
      }
      return {
        ...previousState,
        main: mainValsChange,
      };
    case SIDE_HUSTLES_VARS_CHANGE:
      let sideHustlesValsChange = sideHustles;
      if (sideHustlesValsChange[payload.y]["vals"] !== undefined) {
        sideHustlesValsChange[payload.y]["vals"][payload.x] = payload.varName;
      }
      return {
        ...previousState,
        sideHustles: sideHustlesValsChange,
      };
    default:
      return previousState;
  }
};

export default incomeReducer;
