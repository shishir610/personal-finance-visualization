import { ADD_GRAPH } from "../actions";

let initialState: object[] = [];

const graphingReducer = (
  previousState = initialState,
  action: { type: string; payload: any }
) => {
  const { type, payload } = action;
  if (payload !== undefined) {
    var { mainType, subType, index } = payload;
  }
  switch (type) {
    case ADD_GRAPH:
      return [
        ...previousState,
        {
          mainType,
          subType,
          index,
        },
      ];
    default:
      return previousState;
  }
};

export default graphingReducer;
