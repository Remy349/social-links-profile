import React from 'react'
import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from '../src/App'

describe('Testing App.jsx', () => {
  test('should render the <App /> component', () => {
    render(<App />)

    expect(screen.getByText('Jessica Randall')).toBeDefined()
  })
})
