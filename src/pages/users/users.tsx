import React, {useEffect, useState} from 'react';
// import axios from 'axios';
import UserList from '../../component/userList/userList';
// import { User } from '../../component/userList/users';
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from '../../reducer/fetchUser';
import { RootState } from '../../store/store';
import {ThunkDispatch} from "@reduxjs/toolkit";


// interface GetUsersResponse {
//   data: User[];
// };
const GetUsers: React.FC = ()=>{
  // const [users, setUsers] = useState<User[]>([])

  // const fetchUsers = async()=> {
  //   try {
  //     const requestOptions = {
  //       headers: {Accept: 'application/json',}
  //     }
  //     const response = await axios.get<GetUsersResponse>(
  //       `https://reqres.in/api/users`, requestOptions
  //     )
  //     const data = await response.data.data
  //     if(response.status === 200){
  //       setUsers(data)
  //     }
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

  // const dispatch = useDispatch();
  const {userList} = useSelector((state: RootState )=> state.users)

  useEffect(()=>{
    dispatch(fetchUsers())
  }, [dispatch])

  return(
    <div className='users'>
      <h1>UserList</h1>
      <UserList users={userList}/>
    </div>
  )
}
export default GetUsers;
