import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import '../App.css'
import Topbar from './Topbar'
import Search from './Search'

function Products() {
  const [apiRes, setApiRes] = useState([])
  const [list, setList] = useState([])
  const [cate, setcate] = useState([])
  const [selectedcategory, setSelectedCategory] = useState([])
  //console.log(selectedcategory)
  useEffect(() => {
    fetch('https://mocki.io/v1/72f8d1e9-055c-4e6b-bd6a-630de0dad7f4').then((res) => {
      return res.json()
    }).then((json) => {
      setList(json)
      setApiRes(json)
      //console.log(json)
      const cat = json.map((e) => e.category);
      setcate([...new Set(cat)])

    }).catch((e) => {
      console.log(e)
    }
    )
  }, [])




  useEffect(() => {

    if (selectedcategory === '') {
      setList(apiRes)
    }
    else {
      const res = apiRes.filter((o) => o.category === selectedcategory)
      setList(res)
      //console.log(res)
    }
  }, [selectedcategory])




  return (<>

    <div className='h2'>

      <Topbar cate={cate} setSelectedCategory={setSelectedCategory} />
      <Search cate={cate} setSelectedCategory={setSelectedCategory} />
    </div>
    <div className='fe'>
      {list.map((product) => < ProductCard key={product.id} product={product}></ProductCard>)}
    </div>


  </>
  )
}

export default Products