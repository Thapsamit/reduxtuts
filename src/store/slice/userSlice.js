import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user", // this is used to get the data using useSelector like state.user
  initialState: [],
  // it contains micro reducer functions
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
    },
    removeUser(state, action) {},
    deleteAllUser(state, action) {},
  },
});

// can use to make available the action creator functions  to all components
export const { addUser, removeUser, deleteAllUser } = userSlice.actions;
// can use like this also
//export const userActions = userSlice.actions
