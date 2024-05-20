import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import Login from './components/Login'

test('Test login', () => {
  const handleSubmit = jest.fn()
  render(<Login onSubmit={handleSubmit} />);

  const mailInput = screen.getByLabelText(/Vnesi mail/)
  fireEvent.change(mailInput, {target: {value: "a@b.com"}})

  const passwordInput = screen.getByLabelText(/Vnesi geslo/)
  fireEvent.change(passwordInput, {target: {value: "abc"}})

  const submitButton = screen.getByRole("button");
  fireEvent.click(submitButton)

  expect(submitButton).toHaveAttribute("disabled");
  
});
