import React, { useState } from 'react'

const Search = (props) => {
    const [x, setX] = useState('')
    const handleCategorySelection = ((e) => {
        props.setSelectedCategory(x)
      })
  return (<>
    <div><input type='text'  onChange={(a) => { setX((a.target.value)) }}  placeholder='SEARCH CATEGORIES '/>
    <button onClick={handleCategorySelection}>Search</button></div>
</>
  )}
export default Search