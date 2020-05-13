import React, { useState } from 'react';

export default function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [submittedName, setSubmittedName] = useState('');

  function handleChangeFirstName(e) {
    setFirstName(e.target.value);
  }
  function handleChangeLastName(e) {
    setLastName(e.target.value);
  }

  function handleSubmit(e) {
    setSubmittedName(`${firstName} ${lastName}`);

    console.log(submittedName);

    e.preventDefault();
  }

  return (
    <div className="container">
      <h1>Hello {submittedName}</h1>
      <form>
        <input
          onChange={handleChangeFirstName}
          value={firstName}
          type="text"
          placeholder="What's Your First Name?"
        />
        <input
          onChange={handleChangeLastName}
          value={lastName}
          type="text"
          placeholder="What's Your Last Name?"
        />
        <button onClick={handleSubmit} type="button">
          Submit
        </button>
      </form>
    </div>
  );
}
