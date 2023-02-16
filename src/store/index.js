import { configureStore } from "@reduxjs/toolkit";
import { userSlice, postsSlice } from "./slice/userSlice";

export const store = configureStore({
  //work like a combined reducer
  reducer: {
    user: userSlice.reducer,
    posts: postsSlice.reducer,
  },
  devTools: true,
});
