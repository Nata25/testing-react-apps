// simple test with ReactDOM
// http://localhost:3000/counter

import * as React from 'react'
import ReactDOM from 'react-dom'
import Counter from '../../components/counter'

const click = new MouseEvent('click', {
  bubbles: true,
  cancelable: true,
  button: 0,
})

test('counter increments and decrements when the buttons are clicked', () => {
  const div = document.createElement('div')
  document.body.append(div)
  ReactDOM.render(<Counter/>, div)
  const buttons = div.querySelectorAll('button')
  const decrement = buttons[0]
  const increment = buttons[1]
  const message = div.firstChild.querySelector('div')
  //
  expect(message.textContent).toBe('Current count: 0')
  increment.dispatchEvent(click)
  expect(message.textContent).toBe('Current count: 1')
  decrement.dispatchEvent(click)
  expect(message.textContent).toBe('Current count: 0')
  div.remove()
  // 🦉 If you don't cleanup, then it could impact other tests and/or cause a memory leak
})

/* eslint no-unused-vars:0 */
