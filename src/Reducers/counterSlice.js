import { configureStore, createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
    name:"counter",
    initialState:{
        count:10
    },
    reducers:{
        handleClick:(state)=>{
            state.count+=1
        },

        incrementByValue:(state,action)=>{
            state.count+=action.payload
        }
    }
})
export const {incrementByValue} =counterSlice.actions
export const {handleClick} =counterSlice.actions
export default counterSlice.reducer