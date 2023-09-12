import { createSlice } from '@reduxjs/toolkit'

export const breadcrumbSlices = createSlice({
  name: 'breadcrumbSlices',
  initialState: {
    currentname: "",
    previousname:"",
  },
  reducers: {
    pageName: (state,action) => {
        // console.log(state)
        state.previousname = state.currentname;
        state.currentname = action.payload;
    },
   
  },
})

export const { pageName } = breadcrumbSlices.actions

export default breadcrumbSlices.reducer;