/* 
    This creates a Redux store, 
    and also automatically configure the Redux DevTools extension so that you can inspect the store while developing
*/

import { configureStore } from "@reduxjs/toolkit";
import { countryApi } from "./services/ApiProvider";

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [countryApi.reducerPath]: countryApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(countryApi.middleware),
});
