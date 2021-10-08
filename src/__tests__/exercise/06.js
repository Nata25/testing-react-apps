// mocking Browser APIs and modules
// http://localhost:3000/location

import * as React from 'react'
import {render, screen, act} from '@testing-library/react'
import Location from '../../examples/location'
import {useCurrentPosition} from 'react-use-geolocation'

jest.mock('react-use-geolocation')

test('displays the users current location', async () => {
  const fakePosition = {
    coords: {
      latitude: 20,
      longitude: 100
    }
  }
  let setState
  function useMockedCurrentPosition () {
    const [state, dispatch] = React.useState([])
    setState = dispatch
    return state
  }

  useCurrentPosition.mockImplementation(useMockedCurrentPosition)
  
  render(<Location />)

  expect(screen.getByLabelText(/loading/i)).toBeInTheDocument()
  act(() => {
    setState([fakePosition])
  })
  expect(screen.queryByLabelText(/loading/i)).not.toBeInTheDocument()
  expect(screen.getByText(/latitude/i)).toBeInTheDocument()
  expect(screen.getByText(/latitude/i)).toHaveTextContent(fakePosition.coords.latitude)
  expect(screen.getByText(/longitude/i)).toBeInTheDocument()
  expect(screen.getByText(/longitude/i)).toHaveTextContent(fakePosition.coords.longitude)
})

/*
eslint
  no-unused-vars: "off",
*/
