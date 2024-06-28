import React from 'react'
import '../components/head.css'
import logo from '../assets/img.jpg'
import ThemeButton from './ThemeButton'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
function Header() {
                const cartItems = useSelector((state)=>state.cart.items)
    return (
        <>
            <header>
                <div className='header'>
                    <div>
                        <img  src={logo} alt='logo' width={50} height={50} className='logo'/>
                    </div>
                    <div className='nav-links'>
                    {/* <div>Home</div> */}
                    <div><Link to='/products'>Products</Link></div>
                   <div> <Link to='/about'>About</Link></div>
                    <div><Link to='/cart'>cart :{cartItems.length}</Link></div>
                    <div><Link to='/Profile'>Profile</Link></div>
                    <ThemeButton />
                    
                    </div>
                   
                </div>
            </header>


        </>
    )
}

export default Header