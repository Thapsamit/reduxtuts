import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: [],
  // it contains micro reducer functions
  reducers: {
    addUser(state, action) {},
    removeUser(state, action) {},
    deleteAllUser(state, action) {},
  },
});
console.log(userSlice.actions);
