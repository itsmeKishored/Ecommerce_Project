import React, { useState } from 'react'
import '../components/cal.css'
function Calculater() {
  const [value, setvalue] = useState()
  const [x, setX] = useState()
  const [y, sety] = useState()
  function handlep(){
    setvalue(x + y)
  }
  return (<>
    <div className='cal1'>
      <div className='cal2'>
        <h1> Number 1  :<input type='number' onChange={(a) => { setX(Number(a.target.value)) }} ></input></h1>
        <h1>Number 2  :<input type='number' onChange={(b) => { sety(Number(b.target.value)) }} ></input></h1>
      </div>
      <div className='cal2'>
        <button onClick={handlep} >+</button>
        <button onClick={() => setvalue(x - y)}>-</button>
        <button onClick={() => setvalue(x * y)}>*</button>
        <button onClick={() => setvalue(x / y)}>/</button>
      </div>
      <h1><center>RESULT =   {value}</center> </h1>
    </div>
  </>
  )
}
export default Calculater