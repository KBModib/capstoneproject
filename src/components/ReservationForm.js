import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import DatePicker from 'react-datepicker';
import Select from 'react-select';
import Modal from 'react-modal';
import 'react-datepicker/dist/react-datepicker.css';
import './ReservationForm.css'

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNumber: '',
    date: null,
    time: null,
    guests: 1,
    specialNotes: '',
  });

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDateChange = (date) => {
    setFormData({
      ...formData,
      date: date,
    });
  };

  const handleTimeChange = (selectedOption) => {
    setFormData({
      ...formData,
      time: selectedOption,
    });
  };

  const handleGuestsChange = (e) => {
    const guests = parseInt(e.target.value, 10) || 1;
    setFormData({
      ...formData,
      guests: guests > 8 ? 8 : guests,
    });
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    // Redirect to the information confirmation page
    navigate('/');  
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isFormValid = Object.entries(formData).every(([key, value]) => {
      if (key === 'guests') {
        return true;
      }
      return value && String(value).trim().length >= 4;
    });

    if (isFormValid) {
      // Save reservation information to local storage
      localStorage.setItem('reservationInfo', JSON.stringify(formData));
      // Open the success modal
      openModal();
    } else {
      alert('Please fill out all fields (except "Number of Guests") with at least 4 characters.');
    }
  };

  const timeOptions = [];
  const startTime = 11;
  const endTime = 21;

  for (let i = startTime; i <= endTime; i++) {
    const formattedHour = i < 10 ? `0${i}` : `${i}`;
    const timeString = `${formattedHour}:00`;
    timeOptions.push({ value: timeString, label: timeString });
  }

  return (
    <div className='form-container'>
      <h2>Reservation Form</h2>
      <form onSubmit={handleSubmit}>
      <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            minLength={4}
            className='form-input'
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            minLength={4}
            className='form-input'
          />
        </label>
        <br />
        <label>
          Phone No.:
          <input
            type="tel"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleInputChange}
            required
            minLength={10}
            className='phone-input'
          />
        </label>
        <br />
        <div className='form-data'>
        <label>
          Date:
          <DatePicker
            selected={formData.date}
            onChange={handleDateChange}
            dateFormat="yyyy-MM-dd"
            required
            className='date-input'
          />
        </label>
        <br />
        <label className='time-label'>
          Time:
          <Select
            options={timeOptions}
            value={formData.time}
            onChange={handleTimeChange}
            required
            className='time'
          />
        </label>
        </div>
        <br />
        <label>
          Guests:
          <input
            type="number"
            name="guests"
            value={formData.guests}
            onChange={handleGuestsChange}
            min="1"
            max="8"
            className='form-input'
            required
          />
        </label>
        <br />
        <label>
          Special Notes:
          <textarea
            name="specialNotes"
            value={formData.specialNotes}
            onChange={handleInputChange}
            placeholder='Type "No Notes" if you do not have any notes'
            className='notes'
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>

      {/* Success Modal */}
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <h2>Reservation Successful!</h2>
        <p>Your reservation details:</p>
        <ul>
          <li>Name: {formData.name}</li>
          <li>Email: {formData.email}</li>
          <li>Contact Number: {formData.contactNumber}</li>
          <li>Date: {formData.date && formData.date.toDateString()}</li>
          <li>Time: {formData.time && formData.time.value}</li>
          <li>Guests: {formData.guests}</li>
          <li>Special Notes: {formData.specialNotes}</li>
        </ul>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
};

export default ReservationForm;
