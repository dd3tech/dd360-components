import { act, fireEvent, render, waitFor } from '@testing-library/react'
import { describe, it, vi } from 'vitest'
import DateInput from './DateInput'

describe('<DateInput />', () => {
  const mockOnChange = vi.fn()
  it('DateInput should format the input and toggle the date picker', () => {
    const { getByTestId } = render(
      <DateInput onChange={mockOnChange} data-testid="date-input" />
    )
    const input = getByTestId('date-input') as HTMLInputElement

    fireEvent.change(input, { target: { value: '010220225555' } })
    expect(input.value).toBe('01/02/2022')
  })

  it('if the value per prop complies with the format, then you no longer have to process the string in the getDateFormat function', () => {
    const { getByTestId } = render(
      <DateInput
        onChange={mockOnChange}
        value="10/02/2025"
        data-testid="date-input"
      />
    )
    const input = getByTestId('date-input') as HTMLInputElement

    expect(input.value).toBe('10/02/2025')
  })

  it('if the value passed by prop contains 4 characters you must format it correctly', () => {
    const { getByTestId } = render(
      <DateInput
        onChange={mockOnChange}
        value="1002"
        data-testid="date-input"
      />
    )
    const input = getByTestId('date-input') as HTMLInputElement

    expect(input.value).toBe('10/02/')
  })

  it('if the value passed by prop contains 6 characters you must format it correctly', () => {
    const { getByTestId } = render(
      <DateInput
        onChange={mockOnChange}
        value="10/02/20"
        data-testid="date-input"
      />
    )
    const input = getByTestId('date-input') as HTMLInputElement

    expect(input.value).toBe('10/02/20')
  })

  it('if the value passed by prop contains 9 or more characters you must format it correctly', () => {
    const { getByTestId } = render(
      <DateInput
        onChange={mockOnChange}
        value="10/02/202522"
        data-testid="date-input"
      />
    )
    const input = getByTestId('date-input') as HTMLInputElement

    expect(input.value).toBe('10/02/2025')
  })

  it('should render red border when entering a year less than 1000', () => {
    const { getByTestId, container } = render(
      <DateInput onChange={mockOnChange} data-testid="date-input" />
    )
    const input = getByTestId('date-input') as HTMLInputElement

    fireEvent.change(input, { target: { value: '1001500' } })

    expect(container.firstChild).toHaveClass('border-error')
  })

  describe('checking variant types', () => {
    it('it should display the "active" variant correctly', () => {
      const { container } = render(
        <DateInput variant="active" data-testid="date-input" />
      )
      expect(container.firstChild).toHaveClass('border-blue-500')
    })

    it('it should display the "success" variant correctly', () => {
      const { container } = render(
        <DateInput variant="success" data-testid="date-input" />
      )
      expect(container.firstChild).toHaveClass('border-success')
    })

    it('it should display the "warning" variant correctly', () => {
      const { container } = render(
        <DateInput variant="warning" data-testid="date-input" />
      )
      expect(container.firstChild).toHaveClass('border-warning')
    })
  })

  it('DatePicker was rendering', () => {
    const { getByRole, getByTestId } = render(
      <DateInput onChange={mockOnChange} data-testid="date-input" />
    )
    const endAdornment = getByTestId('endAdornment')

    expect(endAdornment.children.length).toEqual(1)
    fireEvent.click(getByRole('active-calendar'))

    const datePicker = getByRole('calendar-container')
    expect(endAdornment.children.length).toEqual(2)
    expect(datePicker).toBeInTheDocument()

    fireEvent.click(getByRole('active-calendar'))
    expect(datePicker).not.toBeInTheDocument()
  })

  it('if the value of the component is empty, it must show the error variant', () => {
    let value = '0'
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      value = event.target.value
    }
    const { getByTestId, container } = render(
      <DateInput onChange={onChange} value={value} data-testid="date-input" />
    )
    const input = getByTestId('date-input') as HTMLInputElement

    fireEvent.change(input, { target: { value: '000' } })
    fireEvent.blur(input)
    expect(container.firstChild).toHaveClass('border-error')
  })

  it('input onDateChange callback', () => {
    const TODAY = new Date('2023-01-01T23:59:59.000Z')
    const value = TODAY.toLocaleDateString('es-ES', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    })
    const { getByTestId, getByRole, getAllByRole } = render(
      <DateInput
        value={value}
        onChange={mockOnChange}
        data-testid="date-input"
      />
    )
    const input = getByTestId('date-input') as HTMLInputElement

    fireEvent.click(getByRole('active-calendar'))
    fireEvent.click(getByRole('select-month'))
    fireEvent.click(getAllByRole('month')[TODAY.getMonth()])
    fireEvent.click(getByRole('select-month'))
    fireEvent.click(getByRole('select-year'))
    fireEvent.click(getByRole('list').children[0])

    const month = `${TODAY.getMonth() + 1}`.padStart(2, '0')
    expect(input.value).toBe(
      `${TODAY.getDate().toString().padStart(2, '0')}/${month}/${
        TODAY.getFullYear() - 10
      }`
    )
  })

  it('props min and max', () => {
    const { getByTestId } = render(
      <DateInput min="02/02/2023" max="02/27/2023" data-testid="date-input" />
    )

    expect(getByTestId('date-input').getAttribute('min')).toBe('02/02/2023')
    expect(getByTestId('date-input').getAttribute('max')).toBe('02/27/2023')
  })

  it('should be displayed the error variant when a date greater or less than the allowed ones is provided', () => {
    const { getByTestId, container } = render(
      <DateInput min="02/02/2023" max="05/15/2023" data-testid="date-input" />
    )
    const input = getByTestId('date-input') as HTMLInputElement

    act(() => {
      fireEvent.change(input, { target: { value: '01/02/2023' } })
      fireEvent.blur(input)
    })
    expect(container.firstChild).toHaveClass('border-error')

    act(() => {
      fireEvent.change(input, { target: { value: '16/05/2023' } })
      fireEvent.blur(input)
    })
    expect(container.firstChild).toHaveClass('border-error')
  })

  it('the DatePicker should be hidden when clicking outside of it', () => {
    const { getByTestId, getByRole } = render(
      <DateInput data-testid="date-input" />
    )
    const input = getByTestId('date-input') as HTMLInputElement

    fireEvent.click(getByRole('active-calendar'))
    expect(getByRole('calendar-container')).toBeDefined()

    fireEvent.click(input)
    expect(getByRole('calendar-container')).toBeDefined()

    fireEvent.click(document)
    waitFor(() => {
      expect(getByRole('calendar-container')).not.toBeDefined()
    })
  })
})
