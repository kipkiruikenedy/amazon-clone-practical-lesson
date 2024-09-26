import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'

export function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div className='p-10 m-8'>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          <p className='font-bold bg-green-800 px-3 py-1'>+</p><br/>
        </button>
        <span className='bg-white py-2 px-4 text-blue-500'>{count}</span><br/>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          <p className='font-bold bg-red-500 px-3 py-1'>-</p>
        </button>
      </div>
    </div>
  )
}