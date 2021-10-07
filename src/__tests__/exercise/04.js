// form testing
// http://localhost:3000/login

import * as React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Login from '../../components/login'

test('submitting the form calls onSubmit with username and password', () => {
  // 🐨 create a variable called "submittedData" and a handleSubmit function that
  // accepts the data and assigns submittedData to the data that was submitted

  let submittedData
  function handleSubmit (data) {
    submittedData = data
  }

  render(<Login onSubmit={handleSubmit} />)

  const userName = screen.getByLabelText(/username/i)
  const password = screen.getByLabelText(/password/i)

  const typedUser = 'John'
  const typedPass = '123'
  userEvent.type(userName, typedUser)
  userEvent.type(password, typedPass)
  
  // 🐨 click on the button with the text "Submit"
  const submitButton = screen.getByRole('button', {name: /submit/i})
  userEvent.click(submitButton)
  //
  // assert that submittedData is correct
  // 💰 use `toEqual` from Jest: 📜 https://jestjs.io/docs/en/expect#toequalvalue
  expect(submittedData).toEqual({
    username: typedUser,
    password: typedPass
  })
})

/*
eslint
  no-unused-vars: "off",
*/
