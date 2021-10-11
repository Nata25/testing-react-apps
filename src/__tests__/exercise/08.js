// testing custom hooks
// http://localhost:3000/counter-hook

import * as React from 'react'
import {render, act} from '@testing-library/react'
import useCounter from '../../components/use-counter'

const renderHook = (hook) => {
  const result = {}
  const setup = () => {
    const Counter = () => {
      // const {count, increment, decrement} = useCounter()
      const hookResult = hook()
      Object.assign(result, hookResult)
      return null
    }
    render(<Counter />)
  }
  return { setup, result }
}

test('exposes the count and increment/decrement functions', () => {
  const data = renderHook(() => useCounter())
  data.setup()
  expect(data.result.count).toEqual(0)
  act(() => { data.result.increment() })
  expect(data.result.count).toEqual(1)

  act(() => { data.result.decrement() })
  expect(data.result.count).toEqual(0)
})

test('allows customization of the initial count', () => {
  // initial count > 0
  let data = renderHook(() => useCounter({ initialCount: 2 }))
  data.setup()
  expect(data.result.count).toEqual(2)
  // initial count < 0
  data = renderHook(() => useCounter({ initialCount: -2 }))
  data.setup()
  expect(data.result.count).toEqual(-2)
  act(() => { data.result.increment() })
  expect(data.result.count).toEqual(-1)
  act(() => { data.result.decrement() })
  expect(data.result.count).toEqual(-2)
  // initial count 0
  data = renderHook(() => useCounter({ initialCount: 0 }))
  data.setup()
  expect(data.result.count).toEqual(0)
})

test('allows customization of the step', () => {
  let data = renderHook(() => useCounter({ step: 2 }))
  data.setup()
  act(() => { data.result.increment() })
  expect(data.result.count).toEqual(2)
  act(() => { data.result.decrement() })
  expect(data.result.count).toEqual(0)
})

test('allows customization of initial count and the step', () => {
  let data = renderHook(() => useCounter({ initialCount: 3, step: 2 }))
  data.setup()
  expect(data.result.count).toEqual(3)
  act(() => { data.result.increment() })
  expect(data.result.count).toEqual(5)
  act(() => { data.result.decrement() })
  expect(data.result.count).toEqual(3)
})

/* eslint no-unused-vars:0 */
