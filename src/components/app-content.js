'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import Search from './search'
import UserInfo from './user-info'
import Actions from './actions'
import Repos from './repos'

const AppContent = ({ userInfo, repos, starred, handleSearch }) => (
  <div className='app'>
    <Search handleSearch={handleSearch} />
    {!!userInfo && <UserInfo userInfo={userInfo} />}
    {!!userInfo && <Actions />}
    {!!repos.length &&
      <Repos
        className='repos'
        title='Repositorios'
        repos={repos}
      />}
    {!!starred.length &&
      <Repos
        className='Starred'
        title='Repositorios Favoritos'
        repos={starred}
      />}
  </div>
)

AppContent.propTypes = {
  repos: PropTypes.array.isRequired,
  starred: PropTypes.array.isRequired,
  userInfo: PropTypes.object
}
export default AppContent
