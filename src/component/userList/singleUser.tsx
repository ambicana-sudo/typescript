import React from 'react'
import { User } from './users'
interface Props{
  item: User
}

const SingleUser = ({item}: Props) => {
  return (
    <div>
      <img src={item.avatar} alt=""/>
          <p>{item.first_name} {item.last_name}</p>
          <p>{item.email}</p>
      </div>
  )
}

export default SingleUser