import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ReservationForm from './ReservationForm';


test('renders ReservationForm component', () => {
  render(<ReservationForm />);
  // You can add more specific tests related to the rendering if needed
  expect(screen.getByText('Reservation Form')).toBeInTheDocument();
});

test('form validation and error handling', () => {
  render(<ReservationForm />);

  // Mock the localStorage.setItem function
  const localStorageMock = jest.spyOn(window.localStorage.__proto__, 'setItem');

  // Submit the form without filling required fields
  fireEvent.click(screen.getByText('Submit'));

  // Check if an alert is shown
  expect(window.alert).toHaveBeenCalledWith(
    'Please fill out all fields (except "Number of Guests") with at least 4 characters.'
  );

  // Fill in valid form data
  fireEvent.change(screen.getByLabelText('Name:'), { target: { value: 'John Doe' } });
  fireEvent.change(screen.getByLabelText('Email:'), { target: { value: 'john@example.com' } });
  fireEvent.change(screen.getByLabelText('Phone No.:'), { target: { value: '1234567890' } });
  fireEvent.change(screen.getByLabelText('Date:'), { target: { value: '2023-01-01' } });
  fireEvent.change(screen.getByLabelText('Time:'), { target: { value: { value: '12:00', label: '12:00' } } });

  // Submit the form
  fireEvent.click(screen.getByText('Submit'));

  // Check if the modal is opened
  expect(screen.getByText('Reservation Successful!')).toBeInTheDocument();

  // Check if localStorage.setItem is called with the correct data
  expect(localStorageMock).toHaveBeenCalledWith(
    'reservationInfo',
    JSON.stringify({
      name: 'John Doe',
      email: 'john@example.com',
      contactNumber: '1234567890',
      date: new Date('2023-01-01'),
      time: { value: '12:00', label: '12:00' },
      guests: 1, // Assuming the default value is 1
      specialNotes: '',
    })
  );
});
