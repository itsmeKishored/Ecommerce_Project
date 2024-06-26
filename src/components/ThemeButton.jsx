import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/theme'
import { CountContext } from '../contexts/count'

function ThemeButton() {
  const {handleClick}=useContext(CountContext)
  const { theme, toggleTheme } = useContext(ThemeContext)
  return (
    <>
      <button onClick={()=>{
        handleClick()
        toggleTheme()
      }}>{theme}</button>

    </>
  )
}

export default ThemeButton