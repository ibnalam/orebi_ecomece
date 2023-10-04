import { configureStore } from '@reduxjs/toolkit'
// import counterslice from './slice/counterslice'
import breadcrumbSlices from './slice/breadcrumbSlices'
import cartSlices from './slice/cartSlices'


export default configureStore({
  reducer: {  
    breadcrumbSlices: breadcrumbSlices,
    cart: cartSlices,
  },
})

