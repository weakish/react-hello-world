import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import './i18n'
import App from './App'

describe('App', () => {
  it('renders learn react link', () => {
    render(<App />)
    expect(screen.getByText(/learn react/i)).toBeInTheDocument()
  })
})
