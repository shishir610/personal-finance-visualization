export const ADD_GRAPH = "ADD_GRAPH";

export const addGraph = (type: string, index: number) => {
  switch (type) {
    case "MAIN": {
      return {
        type: ADD_GRAPH,
        payload: {
          mainType: "income",
          subType: "main",
          index: index,
        },
      };
    }
    case "SIDE HUSTLES": {
      return {
        type: ADD_GRAPH,
        payload: {
          mainType: "income",
          subType: "sideHustles",
          index: index,
        },
      };
    }
    case "REGULAR": {
      return {
        type: ADD_GRAPH,
        payload: {
          mainType: "expenditure",
          subType: "regular",
          index: index,
        },
      };
    }
    case "MISCELLANEOUS": {
      return {
        type: ADD_GRAPH,
        payload: {
          mainType: "expenditure",
          subType: "miscellaneous",
          index: index,
        },
      };
    }
    case "LIQUID": {
      return {
        type: ADD_GRAPH,
        payload: {
          mainType: "assets",
          subType: "liquid",
          index: index,
        },
      };
    }
    case "NON LIQUID": {
      return {
        type: ADD_GRAPH,
        payload: {
          mainType: "assets",
          subType: "nonLiquid",
          index: index,
        },
      };
    }
    case "STOCKS": {
      return {
        type: ADD_GRAPH,
        payload: {
          mainType: "investments",
          subType: "stocks",
          index: index,
        },
      };
    }
    case "REAL ESTATE": {
      return {
        type: ADD_GRAPH,
        payload: {
          mainType: "investments",
          subType: "realEstate",
          index: index,
        },
      };
    }
    case "CRYPTO": {
      return {
        type: ADD_GRAPH,
        payload: {
          mainType: "investments",
          subType: "crypto",
          index: index,
        },
      };
    }
  }
};
