import React from 'react'
import '../App.css'
import { useDispatch } from 'react-redux'
import { itemsAdded } from '../Reducers/cartSlice'
import { ToastContainer, toast } from 'react-toastify'
function ProductCard(props) {

    //console.log(props.product)
    const {title,description,price,image}=props.product ||{}
    //const {category}=props.product||{}
    const dispatch=useDispatch()
    const addItems=()=>{
          dispatch(itemsAdded(props.product))
          toast(title+" added to card")
    }

  return (
    <>
    <div className='cc'>
    <div className='card'>
      <center>
    <img src={image} width={200}height={300} className='image-container'/>
    <div className='tit'>{title}</div>
    <div className='des'>{description}</div>
    <div className='pri'> PRICE : ${price}
    </div>
    <div className='cartbuy'>
      <button onClick={addItems} className='add-to-cart-button'>ADD CARD</button>
      <button className='buy-now-button'>BUY</button>
      </div>
    </center>
    </div>
    </div>
    <ToastContainer/>
    </>
  )
}

export default ProductCard