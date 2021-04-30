export const MAIN_VARS_CHANGE = "MAIN_VARS_CHANGE";
export const SIDE_HUSTLES_VARS_CHANGE = "SIDE_HUSTLES_VARS_CHANGE";
export const REGULAR_VARS_CHANGE = "REGULAR_VARS_CHANGE";
export const MISCELLEANOUS_VARS_CHANGE = "MISCELLEANOUS_VARS_CHANGE";
export const LIQUID_VARS_CHANGE = "LIQUID_VARS_CHANGE";
export const NON_LIQUID_VARS_CHANGE = "NON_LIQUID_VARS_CHANGE";
export const STOCKS_VARS_CHANGE = "STOCKS_VARS_CHANGE";
export const REAL_ESTATE_VARS_CHANGE = "REAL_ESTATE_VARS_CHANGE";
export const CRYPTO_VARS_CHANGE = "CRYPTO_VARS_CHANGE";

export const handleVarChange = (
  event: any,
  type: string,
  x: number,
  y: number
) => {
  switch (type) {
    case "MAIN": {
      return {
        type: MAIN_VARS_CHANGE,
        payload: {
          varName: event.target.value,
          x,
          y,
        },
      };
    }
    case "SIDE HUSTLES": {
      return {
        type: SIDE_HUSTLES_VARS_CHANGE,
        payload: {
          varName: event.target.value,
          x,
          y,
        },
      };
    }
    case "REGULAR": {
      return {
        type: REGULAR_VARS_CHANGE,
        payload: {
          varName: event.target.value,
          x,
          y,
        },
      };
    }
    case "MISCELLANEOUS": {
      return {
        type: MISCELLEANOUS_VARS_CHANGE,
        payload: {
          varName: event.target.value,
          x,
          y,
        },
      };
    }
    case "LIQUID": {
      return {
        type: LIQUID_VARS_CHANGE,
        payload: {
          varName: event.target.value,
          x,
          y,
        },
      };
    }
    case "NON LIQUID": {
      return {
        type: NON_LIQUID_VARS_CHANGE,
        payload: {
          varName: event.target.value,
          x,
          y,
        },
      };
    }
    case "STOCKS": {
      return {
        type: STOCKS_VARS_CHANGE,
        payload: {
          varName: event.target.value,
          x,
          y,
        },
      };
    }
    case "REAL ESTATE": {
      return {
        type: REAL_ESTATE_VARS_CHANGE,
        payload: {
          varName: event.target.value,
          x,
          y,
        },
      };
    }
    case "CRYPTO": {
      return {
        type: CRYPTO_VARS_CHANGE,
        payload: {
          varName: event.target.value,
          x,
          y,
        },
      };
    }
  }
};
