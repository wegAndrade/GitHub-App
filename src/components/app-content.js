'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import Search from './search'
import UserInfo from './user-info'
import Actions from './actions'
import Repos from './repos'

const AppContent = ({ userInfo, repos, starred, handleSearch, getRepos, getStarred }) => (
  <div className='app'>
    <Search handleSearch={handleSearch} />
    {!!userInfo && <UserInfo userInfo={userInfo} />}
    {!!userInfo && <Actions getRepos={getRepos} getStarred={getStarred} />}
    {!!repos.length &&
      <Repos
        className='repos'
        title='Repositorios'
        repos={repos}
      />}
    {!!starred.length &&
      <Repos
        className='starred'
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
