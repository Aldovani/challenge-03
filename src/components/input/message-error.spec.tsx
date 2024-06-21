import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { MessageError } from './message-error'

describe('<MessageError/>', () => {
  it('Should be able to render the component', () => {
    render(<MessageError error="message error" />)

    const message = screen.getByText('message error')

    expect(message).toBeInTheDocument()
  })

  it('Should not be able to render the component if error undefined', () => {
    render(<MessageError error={undefined} />)

    const message = screen.queryByText('message error')

    expect(message).not.toBeInTheDocument()
  })
})
