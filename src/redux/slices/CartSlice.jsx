import { createSlice } from "@reduxjs/toolkit";


const CartSlice= createSlice({
    name:"cart",
    initialState: {
        items:[]  
    },
    reducers:{
        add:(state,action)=>{
            const prod = action.payload;
         
            state.items.push(prod);
        },
        remove:(state,action)=>{
            const prodIdToRemove = action.payload;
            state.items= state.items.filter((item)=>item.id!== prodIdToRemove);
        }
    }
})

export const {add,remove}= CartSlice.actions;
export default CartSlice.reducer;