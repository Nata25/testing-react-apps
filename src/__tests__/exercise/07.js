// testing with context and a custom render method
// http://localhost:3000/easy-button

import * as React from 'react'
import {render as renderRtl, screen} from '@testing-library/react'
import {ThemeProvider} from '../../components/theme'
import EasyButton from '../../components/easy-button'

function render (theme = 'light') {
  const Wrapper = ({children}) => {
    return (
      <ThemeProvider initialTheme={theme}>
        {children}
      </ThemeProvider>
    )
  }

  renderRtl(<EasyButton>Easy</EasyButton>, { wrapper: Wrapper })
}

test('renders with the light styles for the light theme', () => {
  render()
  const button = screen.getByRole('button', {name: /easy/i})
  expect(button).toHaveStyle(`
    background-color: white;
    color: black;
  `)
})

test('renders with the dark styles for the dark theme', () => {
  render('dark')
  const button = screen.getByRole('button', {name: /easy/i})
  expect(button).toHaveStyle(`
    background-color: black;
    color: white;
  `)
})

/* eslint no-unused-vars:0 */
