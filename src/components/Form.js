import React, { useState } from 'react';

export default function Form() {
  const [clientInfo, setClientInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const [showFullName, setShowFullName] = useState('');
  const [showEmail, setShowEmail] = useState('');

  function getData(e) {
    const { value, name } = e.target;

    setClientInfo((prevValue) => {
      if (name === 'firstName') {
        return {
          firstName: value,
          lastName: prevValue.lastName,
          email: prevValue.email,
        };
      } else if (name === 'lastName') {
        return {
          firstName: prevValue.firstName,
          lastName: value,
          email: prevValue.email,
        };
      } else if (name === 'email') {
        return {
          firstName: prevValue.firstName,
          lastName: prevValue.lastName,
          email: value,
        };
      }
    });
  }

  function displayData(e) {
    setShowFullName(`${clientInfo.firstName} ${clientInfo.lastName}`);
    setShowEmail(clientInfo.email);
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
        <button>Submit</button>
      </form>

      <h2>Email: {showEmail} </h2>
    </div>
  );
}
