import {
  ADD_LIQUID,
  ADD_NON_LIQUID,
  LIQUID_TITLE_CHANGE,
  NON_LIQUID_TITLE_CHANGE,
} from "../actions";

let initialState = {
  liquid: [{ name: "newVar" }],
  nonLiquid: [{ name: "newVar" }],
};

const assetsReducer = (
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
    case ADD_LIQUID:
      return {
        ...previousState,
        liquid: [
          {
            name: payload.name,
            vals: payload.vals,
          },
          ...previousState.liquid,
        ],
      };
    case ADD_NON_LIQUID:
      return {
        ...previousState,
        nonLiquid: [
          {
            name: payload.name,
            vals: payload.vals,
          },
          ...previousState.nonLiquid,
        ],
      };
    case LIQUID_TITLE_CHANGE:
      let { liquid } = previousState;
      index = parseInt(index);
      let liquidChange = liquid;
      liquidChange[index]["name"] = varName;
      return {
        ...previousState,
        liquid: liquidChange,
      };
    case NON_LIQUID_TITLE_CHANGE:
      let { nonLiquid } = previousState;
      index = parseInt(index);
      let nonLiquidChange = nonLiquid;
      nonLiquidChange[index]["name"] = varName;
      return {
        ...previousState,
        nonLiquid: nonLiquidChange,
      };
    default:
      return previousState;
  }
};

export default assetsReducer;
