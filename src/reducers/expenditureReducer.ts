import {
  ADD_REGULAR,
  ADD_MISC,
  REGULAR_TITLE_CHANGE,
  MISCELLEANOUS_TITLE_CHANGE,
  REGULAR_VARS_CHANGE,
  MISCELLEANOUS_VARS_CHANGE,
} from "../actions";

let initialState = {
  regular: [{ name: "newVar", vals: [0, 0, 0, 0, 0, 0] }],
  miscellaneous: [{ name: "newVar", vals: [0, 0, 0, 0, 0, 0] }],
};

const expenditureReducer = (
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
  var { regular, miscellaneous } = previousState;
  switch (type) {
    case ADD_REGULAR:
      return {
        ...previousState,
        regular: [
          {
            name: payload.name,
            vals: payload.vals,
          },
          ...previousState.regular,
        ],
      };
    case ADD_MISC:
      return {
        ...previousState,
        miscellaneous: [
          {
            name: payload.name,
            vals: payload.vals,
          },
          ...previousState.miscellaneous,
        ],
      };
    case REGULAR_TITLE_CHANGE:
      index = parseInt(index);
      let regularChange = regular;
      regularChange[index]["name"] = varName;
      return {
        ...previousState,
        regular: regularChange,
      };
    case MISCELLEANOUS_TITLE_CHANGE:
      index = parseInt(index);
      let miscellaneousChange = miscellaneous;
      miscellaneousChange[index]["name"] = varName;
      return {
        ...previousState,
        miscellaneous: miscellaneousChange,
      };
    case REGULAR_VARS_CHANGE:
      let regularValsChange = regular;
      if (regularValsChange[payload.y]["vals"] !== undefined) {
        regularValsChange[payload.y]["vals"][payload.x] = payload.varName;
      }
      return {
        ...previousState,
        regular: regularValsChange,
      };
    case MISCELLEANOUS_VARS_CHANGE:
      let miscellaneousValsChange = miscellaneous;
      if (miscellaneousValsChange[payload.y]["vals"] !== undefined) {
        miscellaneousValsChange[payload.y]["vals"][payload.x] = payload.varName;
      }
      return {
        ...previousState,
        miscellaneous: miscellaneousValsChange,
      };
    default:
      return previousState;
  }
};

export default expenditureReducer;
