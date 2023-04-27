import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { User } from '../component/userList/users';

interface GetUsersResponse {
  data: User[];
};

// interface FetchTodosError {
//   message: string;
// };


export const fetchUsers = createAsyncThunk<User[]>(
  'content/fetchUsers',
  async () => {
    const requestOptions = {
      headers: {Accept: 'application/json',}
    }
    const response = await axios.get<GetUsersResponse>(
      `https://reqres.in/api/users`, requestOptions
    )
    const data = await response.data.data
    return data
    }
)