import React from 'react'
import { useParams } from 'react-router-dom'


function UserDetail() {
  const { id }  = useParams();
  // const userId = useParams();
  // const id = userId.id;
  return (
    <div>
      <h2>User Detail page {id}</h2>
    </div>
  )
}

export default UserDetail
