import {
  ADD_LIQUID,
  ADD_NON_LIQUID,
  LIQUID_TITLE_CHANGE,
  LIQUID_VARS_CHANGE,
  NON_LIQUID_TITLE_CHANGE,
  NON_LIQUID_VARS_CHANGE,
} from "../actions";

let initialState = {
  liquid: [{ name: "newVar", vals: [0, 0, 0, 0, 0, 0] }],
  nonLiquid: [{ name: "newVar", vals: [0, 0, 0, 0, 0, 0] }],
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
  var { liquid, nonLiquid } = previousState;
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
      index = parseInt(index);
      let liquidChange = liquid;
      liquidChange[index]["name"] = varName;
      return {
        ...previousState,
        liquid: liquidChange,
      };
    case NON_LIQUID_TITLE_CHANGE:
      index = parseInt(index);
      let nonLiquidChange = nonLiquid;
      nonLiquidChange[index]["name"] = varName;
      return {
        ...previousState,
        nonLiquid: nonLiquidChange,
      };
    case LIQUID_VARS_CHANGE:
      let liquidValsChange = liquid;
      if (liquidValsChange[payload.y]["vals"] !== undefined) {
        liquidValsChange[payload.y]["vals"][payload.x] = payload.varName;
      }
      return {
        ...previousState,
        liquid: liquidValsChange,
      };
    case NON_LIQUID_VARS_CHANGE:
      let nonLiquidValsChange = nonLiquid;
      if (nonLiquidValsChange[payload.y]["vals"] !== undefined) {
        nonLiquidValsChange[payload.y]["vals"][payload.x] = payload.varName;
      }
      return {
        ...previousState,
        nonLiquid: nonLiquidValsChange,
      };
    default:
      return previousState;
  }
};

export default assetsReducer;
