'use strict'

import React from 'react'

const App = () => (
  <div>
    <div className='app'>
      <div className='search'>
        <input type='search' placeholder='Digite o nome do Usuario no GitHub' />
      </div>
      <div className='user-info'>
        <img src='https://avatars1.githubusercontent.com/u/46503357?v=4' />
        <h1>
          <a href='https://api.github.com/users/iTzWeg'>
            Wellington de Andrade
          </a>
        </h1>

        <ul className='repos-info'>
          <li> - Repositorios: 122</li>
          <li> - Seguidores: 0 </li>
          <li> - Seguindo: 10 </li>
        </ul>

        <div className='actions'>
          <button>Ver repositorios</button>
          <button>Ver favoritos</button>
        </div>
        <div className='repos'>
          <h2>Repositorios</h2>
          <ul>
            <li><a href='#'>Nome do repositorio</a></li>
          </ul>
        </div>

        <div className='starred'>
          <h2>Repositorios favoritos</h2>
          <ul>
            <li><a href='#'>Nome do repositorio</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
)

export default App
