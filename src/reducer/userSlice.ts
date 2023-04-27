import { createSlice } from '@reduxjs/toolkit'
import { User } from '../component/userList/users'
import { fetchUsers } from './fetchUser';

type UsersState = {
  status: "loading" | "idle";
  error: string | null;
  userList: User[];
  alert: boolean
};

const initialState: UsersState = {
  userList: [],
  status:"idle",
  error: null,
  alert: false
}

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(fetchUsers.fulfilled, (state, action) => {
      state.userList = action.payload
    })
    
  },
})

export default userSlice.reducer
