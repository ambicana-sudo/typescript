import React, {useEffect, useState} from 'react';
import axios from 'axios';
import UserList from '../../component/userList/userList';
import { User } from '../../component/userList/users';
interface GetUsersResponse {
  data: User[];
};
const GetUsers: React.FC = ()=>{
  const [users, setUsers] = useState<User[]>([])

  const fetchUsers = async()=> {
    try {
      const requestOptions = {
        headers: {Accept: 'application/json',}
      }
      const response = await axios.get<GetUsersResponse>(
        `https://reqres.in/api/users`, requestOptions
      )
      const data = await response.data.data
      if(response.status === 200){
        setUsers(data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    fetchUsers()
  }, [])

  return(
    <div className='users'>
      <h1>UserList</h1>
      <UserList users={users}/>
    </div>
  )
}



export default GetUsers;
