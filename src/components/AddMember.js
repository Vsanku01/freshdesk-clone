import React, { useState } from 'react';
import './assets/main.css';

const AddMember = () => {
  const [email, setEmail] = useState('');

  const buttonHandler = (e) => {
    e.preventDefault();
    fetch('http://localhost:5000/add-member', {
      method: 'POST',
      body: JSON.stringify({ email }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        alert(result.message);
        setEmail('');
      });
  };
  return (
    <main>
      <div>
        <h1 className='m-2 font-bold capitalize text-2xl'>
          Add / Invite organization member
        </h1>
        <div className='flex flex-col items-center'>
          <label name='email' className='m-4'>
            Enter employee email
          </label>
          <input
            type='email'
            name='email'
            className='p-2 rounded-md w-2/5'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            className='m-5 bg-red-400 p-2 rounded-md hover:bg-red-200'
            onClick={buttonHandler}
          >
            Send Invite
          </button>
        </div>
      </div>
    </main>
  );
};

export default AddMember;
