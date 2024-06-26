import React from 'react'

function Body(props) {
  console.log(props)
  return (
    
    <>
    <div>Body Component</div>
    <h1> name :  {props.name} </h1>
    <h1> age :{props.age}</h1>

    </>
  )
}

export default Body