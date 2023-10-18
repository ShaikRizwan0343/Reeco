import { configureStore, combineReducers } from "@reduxjs/toolkit";
import productReducer from "./productSlice";

const rootReducer = combineReducers({
  productData: productReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
