import { configureStore, createReducer } from '@reduxjs/toolkit'
import counterReducer from './Reducers/counterSlice'
import cartSlice from './Reducers/cartSlice'

 export const store= configureStore({
  reducer: {
    counter: counterReducer,
    cart:cartSlice
  },
})  
// export default Store