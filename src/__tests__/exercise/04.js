// form testing
// http://localhost:3000/login

import * as React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import faker from 'faker'
import Login from '../../components/login'

function buildLoginForm({ username, password } = {}) {
  return {
    username: username ? username : faker.internet.userName(),
    password: password ? password : faker.internet.password()
  }
}

test('submitting the form calls onSubmit with username and password', () => {
  const mockedHandleSubmit = jest.fn()

  render(<Login onSubmit={mockedHandleSubmit} />)

  const { username, password } = buildLoginForm()

  userEvent.type(screen.getByLabelText(/username/i), username)
  userEvent.type(screen.getByLabelText(/password/i), password)

  const submitButton = screen.getByRole('button', {name: /submit/i})
  userEvent.click(submitButton)

  expect(mockedHandleSubmit).toHaveBeenCalledWith({
    username,
    password
  })
})

/*
eslint
  no-unused-vars: "off",
*/
