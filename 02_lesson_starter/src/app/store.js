import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../features/posts/postsSlice";
import userSlice from "../features/users/userSlice";
export const store = configureStore({
  reducer: {
    posts: postReducer,
    users: userSlice,
  },
});
