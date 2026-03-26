import React from 'react'
import HamidPic from '../assets/HamidPic.jpg'
const UserCard = () => {
  return (
    <div className='user-container'>
      <p id="user-name">Hamid Rana</p>
      <img src={HamidPic} alt="Hamid" id="user-img" />
      <p id="user-desc">Description of Hamid Rana</p>
    </div>
  )
}

export default UserCard
