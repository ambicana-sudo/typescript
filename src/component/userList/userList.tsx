import React from 'react'
import { User } from './users'
import SingleUser from './singleUser'
interface Props{
  users: User[]
}

const UserList: React.FC<Props> = ({users}: Props) => {
  return (
    <>
    {users.length > 0 ?
      users.map((item)=>{
        return(
          <SingleUser item={item}/>
        )
      })
    :'loading'}
    </>
  )
}

export default UserList