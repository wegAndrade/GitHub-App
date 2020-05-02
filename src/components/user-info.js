'use strict'

import React from 'react'

const UserInfo = () => (
  <div className='user-info'>
    <img src='https://avatars1.githubusercontent.com/u/46503357?v=4' />
    <h1 className='username'>
      <a href='https://api.github.com/users/iTzWeg'>
        Wellington de Andrade
      </a>
    </h1>

    <ul className='repos-info'>
      <li> - Repositorios: 122</li>
      <li> - Seguidores: 0 </li>
      <li> - Seguindo: 10 </li>
    </ul>
  </div>
)

export default UserInfo
