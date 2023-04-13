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

  return (
    <div className="create">
      <h4>Add A New Doctor</h4>
      <form>
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

        <button type="button">Add Doctor</button>
      </form>
    </div>
  );
};

export default AddDoctor;
