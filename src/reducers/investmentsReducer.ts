import {
  ADD_STOCKS,
  ADD_REAL_ESTATE,
  ADD_CRYPTO,
  STOCKS_TITLE_CHANGE,
  REAL_ESTATE_TITLE_CHANGE,
  CRYPTO_TITLE_CHANGE,
  STOCKS_VARS_CHANGE,
  REAL_ESTATE_VARS_CHANGE,
  CRYPTO_VARS_CHANGE,
} from "../actions";

let initialState = {
  stocks: [{ name: "newVar", vals: [0, 0, 0, 0, 0, 0] }],
  realEstate: [{ name: "newVar", vals: [0, 0, 0, 0, 0, 0] }],
  crypto: [{ name: "newVar", vals: [0, 0, 0, 0, 0, 0] }],
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
  var { stocks, realEstate, crypto } = previousState;
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
      index = parseInt(index);
      let stocksChange = stocks;
      stocksChange[index]["name"] = varName;
      return {
        ...previousState,
        stocks: stocksChange,
      };
    case REAL_ESTATE_TITLE_CHANGE:
      index = parseInt(index);
      let realEstateChange = realEstate;
      realEstateChange[index]["name"] = varName;
      return {
        ...previousState,
        realEstate: realEstateChange,
      };
    case CRYPTO_TITLE_CHANGE:
      index = parseInt(index);
      let cryptoChange = crypto;
      cryptoChange[index]["name"] = varName;
      return {
        ...previousState,
        crypto: cryptoChange,
      };
    case STOCKS_VARS_CHANGE:
      let stocksValsChange = stocks;
      if (stocksValsChange[payload.y]["vals"] !== undefined) {
        stocksValsChange[payload.y]["vals"][payload.x] = payload.varName;
      }
      return {
        ...previousState,
        stocks: stocksValsChange,
      };
    case REAL_ESTATE_VARS_CHANGE:
      let realEstateValsChange = realEstate;
      if (realEstateValsChange[payload.y]["vals"] !== undefined) {
        realEstateValsChange[payload.y]["vals"][payload.x] = payload.varName;
      }
      return {
        ...previousState,
        realEstate: realEstateValsChange,
      };
    case CRYPTO_VARS_CHANGE:
      let cryptoValsChange = crypto;
      if (cryptoValsChange[payload.y]["vals"] !== undefined) {
        cryptoValsChange[payload.y]["vals"][payload.x] = payload.varName;
      }
      return {
        ...previousState,
        crypto: cryptoValsChange,
      };
    default:
      return previousState;
  }
};

export default investmentsReducer;
