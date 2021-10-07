// form testing
// http://localhost:3000/login

import * as React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Login from '../../components/login'

test('submitting the form calls onSubmit with username and password', () => {

  const mockedHandleSubmit = jest.fn()

  render(<Login onSubmit={mockedHandleSubmit} />)

  const userName = screen.getByLabelText(/username/i)
  const password = screen.getByLabelText(/password/i)

  const typedUser = 'John'
  const typedPass = '123'
  userEvent.type(userName, typedUser)
  userEvent.type(password, typedPass)

  const submitButton = screen.getByRole('button', {name: /submit/i})
  userEvent.click(submitButton)
  
  expect(mockedHandleSubmit).toHaveBeenCalledWith({
    username: typedUser,
    password: typedPass
  })
})

/*
eslint
  no-unused-vars: "off",
*/
