import '@testing-library/jest-dom'
import { render, screen, within } from '@testing-library/react'
import Home from '../app/page';
const tL = require('@temp-test-org2/test-library')
 
describe('renders home page', () => {
  it('calculates sum', () => {
    render(<Home />)
 
    const element = within(screen.getByTestId('sum'))
 
    expect(element.getByText(3)).toBeInTheDocument();
  })

  it('renders hello wolrd', () => {
    render(<Home />)

    const logSpy = jest.spyOn(console, "log");
    tL.helloWorld();
    expect(logSpy).toHaveBeenCalledWith("Hello world!");
  }) 
})
