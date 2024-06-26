import { createSlice } from '@reduxjs/toolkit'

const cartSlice =createSlice({

    name:'cart',
    initialState:{
        items:[]
    },
  reducers: {
    itemsAdded:(state,action)=>{

        const addedItem = state.items.find((x)=>x.id===action.payload.id)
        if(addedItem){
            addedItem.quantity+=1
        }
        else{
            state.items.push({...action.payload,quantity:1})
        }
        // if(itemList.find((el)=>el.title==newProduct.title)){
        //     alert("Product Already added in Cart");
        //     return;
        //    }else{
        //     itemList.push(newProduct);
        //    }
       // if(state.items.find((e)=>e.id === filte))
        //state.items.push(action.payload)
        // console.log(state.items(action.payload))
    },
        deleteCart: (state, action) => {
            
           state.items=state.items.filter((x)=>x.id!==action.payload)
            // state.items.pop({...action.payload})
            // console.log("delete pandrom")
            // state.records = state.records.filter(student => student.rollno !== action.payload);
            // state.filteredRecords = state.filteredRecords.filter(student => student.rollno !== action.payload);
          
        },
        incQuantity:(state,action)=>{
            const addedItem = state.items.find((x)=>x.id===action.payload.id)
            if(addedItem){
            addedItem.quantity+=1
            //const addedItem = state.items.find((x)=>x.quantity===action.payload.quantity)
            //addedItem.quantity+=1
            // const incr = state.items.find((x)=>x.id===action.payload.id)
             console.log("qwert")
        }},
        decQuantity:(state,action)=>{
            const addedItem = state.items.find((x)=>x.id===action.payload.id)
            if(addedItem){
             addedItem.quantity-=1
                if(addedItem.quantity=='0'){ state.items=state.items.filter((x)=>x.id!==action.payload.id)}
        }
           
            //const addedItem = state.items.find((x)=>x.quantity===action.payload.quantity)
            //addedItem.quantity+=1
            // const incr = state.items.find((x)=>x.id===action.payload.id)
             console.log("qwert")
        }




  }
})

export const {itemsAdded,deleteCart,incQuantity,decQuantity}=cartSlice.actions
export default cartSlice.reducer