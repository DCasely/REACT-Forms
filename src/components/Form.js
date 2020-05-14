import React, { useState } from 'react';

export default function Form() {
  const [fullName, setFullName] = useState({
    firstName: '',
    lastName: '',
  });

  const [showData, setShowData] = useState('');

  function getData(e) {
    const { value, name } = e.target;

    setFullName((prevValue) => {
      if (name === 'firstName') {
        return { firstName: value, lastName: prevValue.lastName };
      } else if (name === 'lastName') {
        return { firstName: prevValue.firstName, lastName: value };
      }
    });
  }

  function displayData(e) {
    setShowData(`${fullName.firstName} ${fullName.lastName}`);
    e.preventDefault();
  }

  return (
    <div className="container">
      <h1>Hello {showData}</h1>
      <form onSubmit={displayData}>
        <input
          onChange={getData}
          name="firstName"
          value={fullName.firstName}
          type="text"
          placeholder="What's Your First Name?"
        />
        <input
          onChange={getData}
          name="lastName"
          // value={fullName.lastName}
          type="text"
          placeholder="What's Your Last Name?"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
