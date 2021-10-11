// testing custom hooks
// http://localhost:3000/counter-hook

import * as React from 'react'
import {render, act} from '@testing-library/react'
import useCounter from '../../components/use-counter'


const setup = (args) => {
  const result = {}
  const Counter = () => {
    // const {count, increment, decrement} = useCounter()
    Object.assign(result, useCounter(args))
    return null
  }
  render(<Counter />)
  return result
}

test('exposes the count and increment/decrement functions', () => {
  const data = setup()
  expect(data.count).toEqual(0)
  act(() => {
    data.increment()
  })
  expect(data.count).toEqual(1)

  act(() => {
    data.decrement()
  })
  expect(data.count).toEqual(0)
})

test('allows customization of the initial count', () => {
  let data = setup({ initialCount: 2 })
  expect(data.count).toEqual(2)
  data = setup({ initialCount: -2 })
  expect(data.count).toEqual(-2)
  act(() => { data.increment() })
  expect(data.count).toEqual(-1)
  act(() => { data.decrement() })
  expect(data.count).toEqual(-2)
  data = setup({ initialCount: 0 })
  expect(data.count).toEqual(0)
})

test('allows customization of the step', () => {
  let data = setup({ step: 2 })
  act(() => { data.increment() })
  expect(data.count).toEqual(2)
  act(() => { data.decrement() })
  expect(data.count).toEqual(0)
})

test('allows customization of initial count and the step', () => {
  let data = setup({ initialCount: 3, step: 2 })
  act(() => { data.increment() })
  expect(data.count).toEqual(5)
  act(() => { data.decrement() })
  expect(data.count).toEqual(3)
})

/* eslint no-unused-vars:0 */
