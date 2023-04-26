import React, {useEffect, useState} from 'react';
import axios from 'axios';

type User = {
  id: number;
  email: string;
  first_name: string;
};

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
        `${process.env.REACT_API_URL}/users`, requestOptions
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
    <>
    </>
  )
}



export default GetUsers;
