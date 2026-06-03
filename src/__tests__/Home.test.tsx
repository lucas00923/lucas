import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Home from '../pages/Home'

describe('Home Component', () => {
  it('renders the main title', () => {
    render(<Home />)
    const title = screen.getByText('Lucas')
    expect(title).toBeInTheDocument()
  })

  it('renders the subtitle', () => {
    render(<Home />)
    const subtitle = screen.getByText('opaa!!')
    expect(subtitle).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Home />)
    const links = screen.getAllByRole('link')
    expect(links.length).toBeGreaterThan(0)
  })

  it('has correct document title', () => {
    render(<Home />)
    expect(document.title).toBe('Lucas')
  })
})
