import React from 'react'
import '../App.css'
import { useDispatch } from 'react-redux'
import { deleteCart ,incQuantity,decQuantity} from '../Reducers/cartSlice'

  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  const CartItem = (props) => {
     const dispatch=useDispatch()
    const {image,title,price,quantity,id}=props.item
    const handleDelete=()=>{
      ()=>{toast("deleted")}
      dispatch(deleteCart(id))
     
      console.log({id})
    }

      const inQuantity=()=>{
        dispatch(incQuantity(props.item))
        console.log("+")
        toast("Quantity increased  for "+title)
      }
      const desQuantity=()=>{
        dispatch(decQuantity(props.item))
        console.log("-")
        toast("Quantity decreased  for "+title)
      } 
      const handleBye=()=>{
        toast.error(" BUY FUNCTIONALITY WAS NOT IMPLEMENTED")      }
  return (
   <> 
   <ToastContainer/>
   <div className='box'>
    <div><img src={image} width={80} height={70}/></div>
    <div>{title}</div>
    <div>{price}</div>
    <div><button  onClick={desQuantity}>-</button>{quantity}<button onClick={inQuantity}>+</button></div>
    <div><button onClick={handleDelete} >DELETE</button>
    <button  onClick={handleBye}>BUY NOW</button></div>
    </div>

   
   </>  )
}

export default CartItem