import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  products: []
}

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await axios.get('https://fakestoreapi.com/products')
    return response.data
  }
)

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    getProducts: state => {
      return state
    }
  },
  extraReducers: builder => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products.push(action.payload)
    })
  }
})

export const { getProducts } = productsSlice.actions

export default productsSlice.reducer
