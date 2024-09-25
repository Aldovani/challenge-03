import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { Button } from '.'

describe('<Button/>', () => {
  it('Render the banner component', () => {
    render(<Button>Press the button</Button>)

    expect(
      screen.getByRole('button', { name: /Press the button/i }),
    ).toBeInTheDocument()
  })

  it('when in loading show loading...', () => {
    render(<Button isLoading>Press the button</Button>)

    expect(
      screen.getByRole('button', { name: /loading.../i }),
    ).toBeInTheDocument()
  })

  it('can be click on this', () => {
    const onClickFN = vi.fn()
    render(<Button onClick={onClickFN}>Press the button</Button>)

    const button = screen.getByRole('button', { name: /Press the button/i })

    fireEvent.click(button)

    expect(onClickFN).toHaveBeenCalled()
  })
})
