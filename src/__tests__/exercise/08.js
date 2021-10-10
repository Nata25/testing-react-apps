// testing custom hooks
// http://localhost:3000/counter-hook

import * as React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import useCounter from '../../components/use-counter'

const Counter = () => {
  const {count, increment, decrement} = useCounter()
  return (
    <div>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <p>Count: {count}</p>
    </div>
  )
}

test('exposes the count and increment/decrement functions', () => {
  render(<Counter/>)
  const incr = screen.getByRole('button', { name: /increment/i })
  const decr = screen.getByRole('button', { name: /decrement/i })
  const counter = screen.getByText(/count/i)
  expect(counter).toHaveTextContent('0')
  userEvent.click(incr)
  expect(counter).toHaveTextContent('1')
  userEvent.click(decr)
  userEvent.click(decr)
  expect(counter).toHaveTextContent('-1')
})

/* eslint no-unused-vars:0 */
