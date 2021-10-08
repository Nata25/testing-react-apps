// mocking Browser APIs and modules
// http://localhost:3000/location

import * as React from 'react'
import {render, screen, act} from '@testing-library/react'
import Location from '../../examples/location'

const getCurrentPosition = jest.fn()
window.navigator.geolocation = {
  getCurrentPosition
}

function deferred() {
  let resolve, reject
  const promise = new Promise((res, rej) => {
    resolve = res
    reject = rej
  })
  return {promise, resolve, reject}
}
// const {promise, resolve, reject} = deferred()
// promise.then(() => {/* do something */})
// // do other setup stuff and assert on the pending state
// resolve()
// await promise
// // assert on the resolved state

test('displays the users current location', async () => {
  const fakePosition = {
    coords: {
      latitude: 0,
      longitude: 0
    }
  }

  const { promise, resolve, reject } = deferred()

  // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition
  //
  // here's an example of the API:
  // function success(position) {}
  // function error(error) {}
  // navigator.geolocation.getCurrentPosition(success, error)

  getCurrentPosition.mockImplementation(successCb => {
    promise.then(() => {
      act(() => {
        successCb(fakePosition)
      })
    })
  })

  render(<Location />)

  expect(screen.getByLabelText(/loading/i)).toBeInTheDocument()

  resolve()
  await promise

  expect(screen.queryByLabelText(/loading/i)).not.toBeInTheDocument()
  expect(screen.getByText(/latitude/i)).toBeInTheDocument()
  expect(screen.getByText(/longitude/i)).toBeInTheDocument()
})

/*
eslint
  no-unused-vars: "off",
*/
