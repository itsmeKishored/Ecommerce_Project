import React, { useContext, useState } from 'react'
import { CountContext } from '../contexts/count'
import { useDispatch, useSelector } from 'react-redux'
import { handleClick, incrementByValue } from '../Reducers/counterSlice'



function Counter() {

const [val,setVal]=useState()
  const dispatch = useDispatch()
       //const {handleClick}=useContext(CountContext)
       const count = useSelector((state)=>state.counter.count)
const han=()=> {
  dispatch(handleClick())
}


const handle=(e)=>{
   setVal(e.target.value)
  // if(val){
  //   dispatch(incrementByValue(parseInt(val)))
  // }
  // else{
  //   dispatch(handleClick())
  // }

    // setVal(Number(e.target.value))
    // dispatch(incrementByValue())

}
  return (
    <div>
        <h1>counter = {count}</h1>
        <button  onClick={han}> Increment</button>
        <input type='Number' onChange={handle} ></input>

    </div>
  )
}
export default Counter