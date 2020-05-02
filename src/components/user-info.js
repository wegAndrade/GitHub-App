'use strict'

import React from 'react'
import PropTypes from 'prop-types'

const UserInfo = ({ userInfo }) => (
  <div className='user-info'>
    <img src={userInfo.photo} />
    <h1 className='username'>
      <a href={`https://github.com/${userInfo.login}`}>
        {userInfo.username}
      </a>
    </h1>

    <ul className='repos-info'>
      <li> - Repositorios: {userInfo.repos}</li>
      <li> - Seguidores: {userInfo.followers} </li>
      <li> - Seguindo: {userInfo.following} </li>
    </ul>
  </div>
)

UserInfo.propTypes = {
  userInfo: PropTypes.shape({
    username: PropTypes.string.isRequired,
    repos: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,
    photo: PropTypes.string.isRequired

  })
}
export default UserInfo
