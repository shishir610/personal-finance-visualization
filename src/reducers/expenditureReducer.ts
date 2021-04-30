import {
  ADD_REGULAR,
  ADD_MISC,
  REGULAR_TITLE_CHANGE,
  MISCELLEANOUS_TITLE_CHANGE,
} from "../actions";

let initialState = {
  regular: [{ name: "newVar" }],
  miscellaneous: [{ name: "newVar" }],
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
      let { regular } = previousState;
      index = parseInt(index);
      let regularChange = regular;
      regularChange[index]["name"] = varName;
      return {
        ...previousState,
        regular: regularChange,
      };
    case MISCELLEANOUS_TITLE_CHANGE:
      let { miscellaneous } = previousState;
      index = parseInt(index);
      let miscellaneousChange = miscellaneous;
      miscellaneousChange[index]["name"] = varName;
      return {
        ...previousState,
        miscellaneous: miscellaneousChange,
      };
    default:
      return previousState;
  }
};

export default expenditureReducer;
