import React, { useEffect, useState } from 'react'
import './App.css'
// import Body from './components/Body'
// import Counter from './components/Counter'
// import Calculater from './components/Calculater'
// import Header from './components/Header'
// function App() {
//     const {count,setCount}=useState(0)
//   const name = "john"
//   const age = 30
//   const a = <Body />

//   return (<>

//    <Header/>


//     <div>App Component</div>

// <Counter/>
//       <Calculater/>
//     <h1>Jake Fasar Meccurk</h1>
//     <button > {name}</button>
//     <p>Name : {name}</p>
//     <p>Age : {age}</p>
//     {Body({age,name})}
//     <Body name={name} age={age} />
//     <Body name="kishore" age={age} />




//   </>
//   )
// }



// export default App
//import React from 'react'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header'
import { ThemeContext } from './contexts/theme'
import Counter from './components/Counter'
import { CountContext } from './contexts/count'
import Products from './components/Products'
import { Outlet } from 'react-router-dom'

function App() {

  const [count, setCount] = useState(0)
  function handleClick() {
    setCount(count + 1)
  }


  const [theme, setTheme] = useState('LIGHT')
  useEffect(() => {
    console.log({ theme })
    document.body.className = theme;

  }, [theme])

  function toggleTheme() {
    setTheme(theme === 'LIGHT' ? 'DARK' : 'LIGHT')

  }

  return (
    <>
      <CountContext.Provider value={{ count: count, handleClick: handleClick }}>
        <ThemeContext.Provider value={{ theme: theme, toggleTheme: toggleTheme }}>
          <Header />
          <Outlet/>

        </ThemeContext.Provider>
     
      </CountContext.Provider>
      <Products/>
      <ToastContainer/>
      {/* <Counter/> */}
    </>
  )
}

export default App