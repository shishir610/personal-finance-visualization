export const MAIN_TITLE_CHANGE = "MAIN_TITLE_CHANGE";
export const SIDE_HUSTLES_TITLE_CHANGE = "SIDE_HUSTLES_TITLE_CHANGE";
export const REGULAR_TITLE_CHANGE = "REGULAR_TITLE_CHANGE";
export const MISCELLEANOUS_TITLE_CHANGE = "MISCELLEANOUS_TITLE_CHANGE";
export const LIQUID_TITLE_CHANGE = "LIQUID_TITLE_CHANGE";
export const NON_LIQUID_TITLE_CHANGE = "NON_LIQUID_TITLE_CHANGE";
export const STOCKS_TITLE_CHANGE = "STOCKS_TITLE_CHANGE";
export const REAL_ESTATE_TITLE_CHANGE = "REAL_ESTATE_TITLE_CHANGE";
export const CRYPTO_TITLE_CHANGE = "CRYPTO_TITLE_CHANGE";

export const handleVarTitleChange = (event: any, type: string) => {
  switch (type) {
    case "MAIN": {
      return {
        type: MAIN_TITLE_CHANGE,
        payload: {
          varName: event.target.value,
          index: event.target.id,
        },
      };
    }
    case "SIDE HUSTLES": {
      return {
        type: SIDE_HUSTLES_TITLE_CHANGE,
        payload: {
          varName: event.target.value,
          index: event.target.id,
        },
      };
    }
    case "REGULAR": {
      return {
        type: REGULAR_TITLE_CHANGE,
        payload: {
          varName: event.target.value,
          index: event.target.id,
        },
      };
    }
    case "MISCELLANEOUS": {
      return {
        type: MISCELLEANOUS_TITLE_CHANGE,
        payload: {
          varName: event.target.value,
          index: event.target.id,
        },
      };
    }
    case "LIQUID": {
      return {
        type: LIQUID_TITLE_CHANGE,
        payload: {
          varName: event.target.value,
          index: event.target.id,
        },
      };
    }
    case "NON LIQUID": {
      return {
        type: NON_LIQUID_TITLE_CHANGE,
        payload: {
          varName: event.target.value,
          index: event.target.id,
        },
      };
    }
    case "STOCKS": {
      return {
        type: STOCKS_TITLE_CHANGE,
        payload: {
          varName: event.target.value,
          index: event.target.id,
        },
      };
    }
    case "REAL ESTATE": {
      return {
        type: REAL_ESTATE_TITLE_CHANGE,
        payload: {
          varName: event.target.value,
          index: event.target.id,
        },
      };
    }
    case "CRYPTO": {
      return {
        type: CRYPTO_TITLE_CHANGE,
        payload: {
          varName: event.target.value,
          index: event.target.id,
        },
      };
    }
  }
};
