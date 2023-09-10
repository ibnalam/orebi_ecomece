import { configureStore } from '@reduxjs/toolkit'
// import counterslice from './slice/counterslice'
import breadcrumbSlices from './slice/breadcrumbSlices'


export default configureStore({
  reducer: {
    breadcrumbSlices: breadcrumbSlices,
  },
})

