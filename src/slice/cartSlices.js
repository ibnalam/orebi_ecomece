import { createSlice } from '@reduxjs/toolkit'

export const cartSlices = createSlice({
  name: 'cart',
  initialState: {
    cartItem: [],
  },
  reducers: {
    addtocart: (state,action) => {
        // console.log(action.payload.title)
        // state.cartItem.push(action.payload)

        if (state.cartItem.length > 0){
          let arr = []
              state.cartItem.map((item) => { 
              if (item.title == action.payload.title) {
                  item.quantity = item.quantity + 1
                  arr.push(item.title);
              }
          });
  
          if (arr.indexOf(action.payload.title) == -1) {
            state.cartItem.push(action.payload);
          }
  
      }else{
  
          state.cartItem.push(action.payload);
      }
    },


    Increment : (state, action)=> {
      // console.log(state.cartItem.length)
      state.cartItem.map((item) => { 
        if (item.title == action.payload.title) {
            item.quantity = item.quantity + 1
        }
    });
    },


    Decrement : (state, action)=> {
      // console.log(state.cartItem.length)
      state.cartItem.map((item,index) => { 
        if (item.title == action.payload.title) {
         
          if(item.quantity > 0){
            item.quantity = item.quantity - 1
          }
        }

        if(item.quantity == 0){
          // console.log(index)
          state.cartItem.splice(index,1)
        }
        
    });
    },

    RemoveCart: (state, action)=> {
        // console.log(action.payload)
        state.cartItem.map((item, index) => {
          // console.log(item.title)
          if(action.payload.title == item.title){
            // console.log(index)
            state.cartItem.splice(index,1)
          }
        })
    }

  },
})

export const { addtocart,Increment,Decrement,RemoveCart } = cartSlices.actions

export default cartSlices.reducer;


