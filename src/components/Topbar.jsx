import React from 'react'
import '../App.css'

function Topbar(props) {
  const handleCategorySelection = ((e) => {
    props.setSelectedCategory(e.target.value)
  })
  return (<>
    <div className="topbar">
      <select onChange={handleCategorySelection}>
        <option  value=''>ALL CATEGORIES</option>
        {props.cate.map((c) => <option value={c}>{c}</option>)}
      </select>
    </div>
  </>
  )
}

export default Topbar