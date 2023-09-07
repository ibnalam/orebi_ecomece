import { configureStore } from '@reduxjs/toolkit'
import counterslice from './slice/counterslice'

export default configureStore({
  reducer: {
    ibnalam: counterslice
  },
})