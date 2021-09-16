import { configureStore } from "@reduxjs/toolkit";
import { houseApiSlice } from "../state/houses/housesApiSlice";

const store = configureStore({
  reducer: {
    [houseApiSlice.reducerPath]: houseApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(houseApiSlice.middleware);
  },
});

export { store };
