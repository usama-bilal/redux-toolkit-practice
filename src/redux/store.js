import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter'
import productsReducer from './products'

export const store = configureStore({
  reducer: { counter: counterReducer, products: productsReducer }
})
