'use strict'

import React from 'react'
import PropTypes from 'prop-types'

const Search = ({ handleSearch, isDisabled }) => (
  <div className='search'>
    <input
      type='search'
      placeholder='Digite o nome do Usuario no GitHub'
      disabled={isDisabled}
      onKeyUp={handleSearch}
      onChange={(e) => {
        console.log('change', e.target.value)
      }}
    />
  </div>
)
Search.propTypes = {
  handleSearch: PropTypes.func
}
export default Search
