import { render, screen } from '@testing-library/react'
import React from 'react'
import App from './App'

describe('App tests', () => {
    it('renders menu summary component', () => {
        render(<App />)
        expect(screen.getByTestId('menu-summary')).toBeInTheDocument()
    }),
    it('renders menu builder component', () => {
        render(<App />)
        expect(screen.getByTestId('menu-builder')).toBeInTheDocument()
    })
})
