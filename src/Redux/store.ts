// import { HttpErrorsInterceptor } from '../interceptors/http-errors.interceptor';
// import { HttpHeadersInterceptor } from '../interceptors/http-headers.interceptor';
import { configureStore } from '@reduxjs/toolkit'
import UsersReducer from './Slices/UsersSlice';
import TaskReducer  from './Slices/TasksSlice';

export const store = configureStore({
  reducer: {
    Users:UsersReducer,
    Tasks:TaskReducer,
  },
})

// HttpHeadersInterceptor();
// HttpErrorsInterceptor();

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch