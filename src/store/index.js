import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./slice/userSlice";

export const store = configureStore({
  //work like a combined reducer
  reducer: {
    user: userSlice.reducer,
  },
  devTools: true,
});
