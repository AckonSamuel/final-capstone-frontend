/* eslint-disable quote-props */
/* eslint jsx-a11y/label-has-associated-control: ["error", { assert: "either" } ] */

import React, { useState } from 'react';
import './adddoctor.css';

const AddDoctor = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [major, setMajor] = useState('');
  const [profilePicture, setProfilePicture] = useState('');
  const [fees, setFees] = useState('');
  const [availableTime, setAvailableTime] = useState('');
  const [addedMessage, setAddedMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:3000/doctors', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(
        {
          'first_name': `${firstName}`,
          'last_name': `${lastName}`,
          'major': `${major}`,
          'profile_picture': `${profilePicture}`,
          fees,
          'available_time': `${availableTime}`,
        },
      ),
    }).then(() => {
      setFirstName('');
      setLastName('');
      setMajor('');
      setProfilePicture('');
      setFees('');
      setAvailableTime('');
      setAddedMessage('A new doctor has been added successfully');
      setTimeout(() => {
        setAddedMessage('');
      }, '2000');
    });
  };

  return (
    <div className="create">
      <h4>Add A New Doctor</h4>
      <form onSubmit={handleSubmit}>
        <label htmlFor="first-name">First Name</label>
        <input
          type="text"
          name="first-name"
          required
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <label htmlFor="last-name">Last Name</label>
        <input
          type="text"
          name="last-name"
          required
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />

        <label htmlFor="major">Major</label>
        <input
          type="text"
          name="major"
          required
          value={major}
          onChange={(e) => setMajor(e.target.value)}
        />

        <label htmlFor="profile-picture">Profile Picture</label>
        <input
          type="text"
          name="profile-picture"
          required
          value={profilePicture}
          onChange={(e) => setProfilePicture(e.target.value)}
        />

        <label htmlFor="fees">Fees</label>
        <input
          type="text"
          name="fees"
          required
          value={fees}
          onChange={(e) => setFees(e.target.value)}
        />

        <label htmlFor="available-time">Available Time (For Exp: Mon - Fri, 9am - 4pm)</label>
        <input
          type="text"
          name="available-time"
          required
          value={availableTime}
          onChange={(e) => setAvailableTime(e.target.value)}
        />

        <button type="submit">Add Doctor</button>
        <p className="added-message">{addedMessage}</p>
      </form>
    </div>
  );
};

export default AddDoctor;
