import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from './CartItem'
import '../App.css'

function Cart() {
    const items = useSelector((state)=>state.cart.items)

  return (
    

    <div><center><div className='carttitle'>CART</div></center>
        <div>
         <div className='carttitle2'><div></div> <div>PRODUCT</div><div className='price'>PRICE</div><div className='quan'>QUANTITY</div><div></div> </div>
        {items.map((item)=><CartItem key={item.id} item={item}/>)}  
        </div>
        </div>
        
  )
}

export default Cart