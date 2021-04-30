import {
  ADD_STOCKS,
  ADD_REAL_ESTATE,
  ADD_CRYPTO,
  STOCKS_TITLE_CHANGE,
  REAL_ESTATE_TITLE_CHANGE,
  CRYPTO_TITLE_CHANGE,
} from "../actions";

let initialState = {
  stocks: [{ name: "newVar" }],
  realEstate: [{ name: "newVar" }],
  crypto: [{ name: "newVar" }],
};

const investmentsReducer = (
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
    case ADD_STOCKS:
      return {
        ...previousState,
        stocks: [
          {
            name: payload.name,
            vals: payload.vals,
          },
          ...previousState.stocks,
        ],
      };
    case ADD_REAL_ESTATE:
      return {
        ...previousState,
        realEstate: [
          {
            name: payload.name,
            vals: payload.vals,
          },
          ...previousState.realEstate,
        ],
      };
    case ADD_CRYPTO:
      return {
        ...previousState,
        crypto: [
          {
            name: payload.name,
            vals: payload.vals,
          },
          ...previousState.crypto,
        ],
      };
    case STOCKS_TITLE_CHANGE:
      let { stocks } = previousState;
      index = parseInt(index);
      let stocksChange = stocks;
      stocksChange[index]["name"] = varName;
      return {
        ...previousState,
        stocks: stocksChange,
      };
    case REAL_ESTATE_TITLE_CHANGE:
      let { realEstate } = previousState;
      index = parseInt(index);
      let realEstateChange = realEstate;
      realEstateChange[index]["name"] = varName;
      return {
        ...previousState,
        realEstate: realEstateChange,
      };
    case CRYPTO_TITLE_CHANGE:
      let { crypto } = previousState;
      index = parseInt(index);
      let cryptoChange = crypto;
      cryptoChange[index]["name"] = varName;
      return {
        ...previousState,
        crypto: cryptoChange,
      };
    default:
      return previousState;
  }
};

export default investmentsReducer;
