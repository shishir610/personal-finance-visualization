import { combineReducers } from "redux";
import incomeReducer from "./incomeReducer";
import expenditureReducer from "./expenditureReducer";
import assetsReducer from "./assetsReducer";
import investmentsReducer from "./investmentsReducer";
import graphingReducer from "./graphingReducer";

export default combineReducers({
  income: incomeReducer,
  expenditure: expenditureReducer,
  assets: assetsReducer,
  investments: investmentsReducer,
  graphing: graphingReducer,
});
