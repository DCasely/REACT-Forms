import React, { useState } from 'react';

export default function Form() {
  const [clientInfo, setClientInfo] = useState({
    firstName: 'Davin',
    lastName: 'Casely',
    email: 'davin@davincasely.com',
    address: '1000 Main St',
    city: 'Miami',
    state: 'FL',
    zipcode: '33333',
  });

  const [showFullName, setShowFullName] = useState('');
  const [showEmail, setShowEmail] = useState('');
  const [showAddress, setShowAddress] = useState('');
  const [showCity, setShowCity] = useState('');
  const [showState, setShowState] = useState('');
  const [showZipcode, setShowZipcode] = useState('');

  function getData(e) {
    const { value, name } = e.target;
    setClientInfo((client) => {
      return {
        ...client,
        [name]: value,
      };
    });
  }

  function displayData(e) {
    setShowFullName(`${clientInfo.firstName} ${clientInfo.lastName}`);
    setShowEmail(clientInfo.email);
    setShowAddress(clientInfo.address);
    setShowCity(clientInfo.city);
    setShowState(clientInfo.state);
    setShowZipcode(clientInfo.zipcode);
    e.preventDefault();
  }

  function clearData() {
    setClientInfo({
      firstName: '',
      lastName: '',
      email: '',
      address: '',
      city: '',
      state: '',
      zipcode: '',
    });

    setShowFullName('');
    setShowEmail('');
    setShowAddress('');
    setShowCity('');
    setShowState('');
    setShowZipcode('');
  }

  return (
    <div className="container">
      <h1>
        {showFullName.length === 0
          ? 'Book Your Trip To Paradise'
          : `Welcome to Paradise ${showFullName}`}
      </h1>

      <form onSubmit={displayData}>
        <input
          onChange={getData}
          name="firstName"
          value={clientInfo.firstName}
          type="text"
          placeholder="What's Your First Name?"
        />
        <input
          onChange={getData}
          name="lastName"
          value={clientInfo.lastName}
          type="text"
          placeholder="What's Your Last Name?"
        />
        <input
          onChange={getData}
          name="email"
          value={clientInfo.email}
          type="text"
          placeholder="What's Your Email?"
        />
        <input
          onChange={getData}
          name="address"
          value={clientInfo.address}
          type="text"
          placeholder="What's Your Street Address?"
        />
        <input
          onChange={getData}
          name="city"
          value={clientInfo.city}
          type="text"
          placeholder="City"
        />
        <input
          onChange={getData}
          name="state"
          value={clientInfo.state}
          type="text"
          placeholder="State"
        />
        <input
          onChange={getData}
          name="zipcode"
          value={clientInfo.zipcode}
          type="text"
          placeholder="Zipcode"
        />
        <button type="submit">Submit</button>
      </form>

      <div className="clientInfo">
        <h2>Name: {showFullName} </h2>
        <h2>Email: {showEmail} </h2>
        <h2>Address: {showAddress} </h2>
        <h2>City: {showCity} </h2>
        <h2>State: {showState} </h2>
        <h2>Zipcode: {showZipcode} </h2>
        <button onClick={clearData} className="clear-btn" type="button">
          Clear Data
        </button>
      </div>
    </div>
  );
}
