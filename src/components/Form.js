import React, { useState } from 'react';

export default function Form() {
  const [clientInfo, setClientInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
  });

  const [showFullName, setShowFullName] = useState('');
  const [showEmail, setShowEmail] = useState('');
  const [showAddress, setShowAddress] = useState('');

  function getData(e) {
    const { value, name } = e.target;

    setClientInfo((prevValue) => {
      if (name === 'firstName') {
        return {
          firstName: value,
          lastName: prevValue.lastName,
          email: prevValue.email,
          address: prevValue.address,
        };
      } else if (name === 'lastName') {
        return {
          firstName: prevValue.firstName,
          lastName: value,
          email: prevValue.email,
          address: prevValue.address,
        };
      } else if (name === 'email') {
        return {
          firstName: prevValue.firstName,
          lastName: prevValue.lastName,
          email: value,
          address: prevValue.address,
        };
      } else if (name === 'address') {
        return {
          firstName: prevValue.firstName,
          lastName: prevValue.lastName,
          email: prevValue.email,
          address: value,
        };
      }
    });
  }

  function displayData(e) {
    setShowFullName(`${clientInfo.firstName} ${clientInfo.lastName}`);
    setShowEmail(clientInfo.email);
    setShowAddress(clientInfo.address);
    e.preventDefault();
  }

  return (
    <div className="container">
      <h1>Hello {showFullName}</h1>

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
          placeholder="What's Your Address?"
        />
        <button>Submit</button>
      </form>

      <div className="clientInfo">
        <h2>Email: {showEmail} </h2>
        <h2>Address: {showAddress} </h2>
      </div>
    </div>
  );
}
