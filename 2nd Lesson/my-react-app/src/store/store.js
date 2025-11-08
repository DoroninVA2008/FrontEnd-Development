import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../counter/counter.js'

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
})