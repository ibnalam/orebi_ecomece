import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 40,
  },
  reducers: {
    increment: (state,action) => {
        // state.value++
       state.value = state.value + action.payload
        // console.log(action)
    },
    decrement: (state) => {
        if(state.value > 0){
            
            state.value--
        }
    },
  },
})

export const { increment,decrement } = counterSlice.actions

export default counterSlice.reducer