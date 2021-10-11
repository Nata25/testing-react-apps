// testing custom hooks
// http://localhost:3000/counter-hook

import {renderHook, act} from '@testing-library/react-hooks'
import useCounter from '../../components/use-counter'

test('exposes the count and increment/decrement functions', () => {
  const { result } = renderHook(useCounter)
  expect(result.current.count).toEqual(0)
  act(() => { result.current.increment() })
  expect(result.current.count).toEqual(1)

  act(() => { result.current.decrement() })
  expect(result.current.count).toEqual(0)
})

test('allows customization of initial count > 0', () => {
  let { result, rerender } = renderHook(useCounter, {initialProps: { initialCount: 2 }})
  expect(result.current.count).toEqual(2)
  act(() => { result.current.increment() })
  expect(result.current.count).toEqual(3)
  act(() => { result.current.decrement() })
  expect(result.current.count).toEqual(2)
})

test('allows customization of initial count < 0', () => {
  let { result } = renderHook(useCounter, {initialProps: { initialCount: -2 }})
  expect(result.current.count).toEqual(-2)
  act(() => { result.current.increment() })
  expect(result.current.count).toEqual(-1)
  act(() => { result.current.decrement() })
  expect(result.current.count).toEqual(-2)
})

test('allows customization of the step', () => {
  let { result } = renderHook(useCounter, { initialProps: { step: 2 } })
  act(() => { result.current.increment() })
  expect(result.current.count).toEqual(2)
  act(() => { result.current.decrement() })
  expect(result.current.count).toEqual(0)
})

test('allows step to be changed with rerender', () => {
  let { result, rerender } = renderHook(useCounter)
  act(() => { result.current.increment() })
  expect(result.current.count).toEqual(1)
  rerender({ step: 3 })
  act(() => { result.current.increment() })
  expect(result.current.count).toEqual(4)
})

test('allows customization of initial count and the step at the same time', () => {
  let { result } = renderHook(() => useCounter({ initialCount: 3, step: 2 }))
  expect(result.current.count).toEqual(3)
  act(() => { result.current.increment() })
  expect(result.current.count).toEqual(5)
  act(() => { result.current.decrement() })
  expect(result.current.count).toEqual(3)
})

/* eslint no-unused-vars:0 */
