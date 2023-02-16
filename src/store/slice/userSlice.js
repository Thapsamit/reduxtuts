import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { clearAllUsers } from "../actions";
import axios from "axios";
export const getPosts = createAsyncThunk("posts/getPosts", async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");

  return res.data;
});

export const userSlice = createSlice({
  name: "user", // this is used to get the data using useSelector like state.user
  initialState: [],
  // it contains micro reducer functions
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
    },
    removeUser(state, action) {
      state.splice(action.payload, 1);
    },
    deleteAllUser(state, action) {
      state.splice(0, state.length);
    },
  },
  // extra reducer like if any action is reusable to multiple places then we can implement that here
  // extraReducers(builder) {
  //   builder.addCase(userSlice.actions.deleteAllUser, () => {
  //     return state.splice(0, state.length);
  //   });
  // },
  extraReducers(builder) {
    builder.addCase(clearAllUsers.type, (state) => {
      state.splice(0, state.length);
    });
  },
});

export const postsSlice = createSlice({
  name: "posts", // this is used to get the data using useSelector like state.user
  initialState: {
    loading: false,
    posts: [],
  },
  // it contains micro reducer functions
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

// can use to make available the action creator functions  to all components
export const { addUser, removeUser, deleteAllUser } = userSlice.actions;
// can use like this also
//export const userActions = userSlice.actions
