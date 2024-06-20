import { fireEvent, render, screen } from '@testing-library/react'
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

  it('styles from outline variant', () => {
    const { container } = render(
      <Button variants="outline">Press the button</Button>,
    )

    expect(container.firstChild).toHaveClass(
      'border',
      'rounded-2xl',
      'hover:bg-primary-500',
      'transition-colors',
      'hover:border-primary-500',
      'hover:text-white',
    )
  })

  it('call onClick', () => {
    const onClick = jest.fn()

    render(
      <Button onClick={onClick} variants="outline">
        Press the button
      </Button>,
    )
    const button = screen.getByRole('button', { name: /Press the button/i })

    fireEvent.click(button)

    expect(onClick).toHaveBeenCalled()
  })
})
