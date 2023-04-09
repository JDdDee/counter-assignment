// import necessary react testing library helpers here
import {render, screen} from '@testing-library/react'
import { fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
// import the Counter component here
import Counter from '../components/Counter'

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />)
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  // fetch the counter message 
  const counterMessage = screen.getByText('Counter')
  expect(counterMessage).toBeInTheDocument()
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const counterValue = screen.getByTestId('count')
  expect(counterValue).toHaveTextContent('0')
  
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  //clicking + increments the count
  const incrementButton = screen.getByText('+')
  fireEvent.click(incrementButton)

  const counterValue = screen.getByTestId('count')
  expect(counterValue).toHaveTextContent('1')

});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  //clicking - decrements the count
  const decrementButton = screen.getByText('-')
  fireEvent.click(decrementButton)

  const counterValue = screen.getByTestId('count')
  expect(counterValue).toHaveTextContent('-1')
});
