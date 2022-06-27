import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount } from '../redux/counter'

export const Counter = () => {
  const { count } = useSelector(state => state.counter)
  const dispatch = useDispatch()

  return (
    <div>
      <h2>Count is {count}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(10))}>
        Icrement by 10
      </button>
    </div>
  )
}
