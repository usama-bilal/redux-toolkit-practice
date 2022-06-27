import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../redux/products'

const Products = () => {
  const dispatch = useDispatch()
  const { products } = useSelector(state => state.products)
  console.log(products)
  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  return <div>Products</div>
}

export default Products
