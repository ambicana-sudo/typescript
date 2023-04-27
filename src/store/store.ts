import { configureStore } from '@reduxjs/toolkit'
import userSlice from '../reducer/userSlice'
import thunkMiddleware from 'redux-thunk';
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    users: userSlice,
  },
  middleware: [thunkMiddleware],
})

export default store
export type RootState = ReturnType<typeof store.getState>
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
export type AppDispatch = typeof store.dispatch