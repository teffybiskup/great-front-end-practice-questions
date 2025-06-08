import { render, fireEvent, screen } from '@testing-library/react';
import Counter from '../components/Counter/Counter';

describe('Counter', () => {
  it('should increase the number', () => {
    render(<Counter/>);
    
    const counterButton = screen.getByTestId("button");
    expect(counterButton).toHaveTextContent("Clicks: 0");

    fireEvent.click(counterButton);
    expect(counterButton).toHaveTextContent("Clicks: 1");
  })
});
