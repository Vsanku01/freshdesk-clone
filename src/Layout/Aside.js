import React, { useState, useEffect } from 'react';
import '../components/assets/main.css';

const Aside = (props) => {
  const [ticketDescription, setTicketDescription] = useState('');
  const [timeDuration, setTimeDuration] = useState('');
  const [selectedPriority, setSelectedPriority] = useState('');
  const [userName, setUserName] = useState('');
  const [image, setImage] = useState('');

  // setInterval(() => {
  //   props.setRefactorCards(!props.refactorCards);
  // }, 9000);

  const buttonHandler = async (e) => {
    e.preventDefault();
    console.log(
      userName,
      ticketDescription,
      props.loggedUser,
      timeDuration,
      selectedPriority
    );
    let ticketBody = {
      name: userName,
      description: ticketDescription,
      email: props.loggedUser,
      due: timeDuration,
      priority: selectedPriority,
      image: image,
    };

    console.log('Ticket Body', ticketBody);
    await fetch('http://localhost:5000/add-ticket', {
      method: 'POST',
      body: JSON.stringify(ticketBody),
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((result) => {
        alert(result.message);
        props.setRefactorCards(!props.refactorCards);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const loggedUserData = { email: props.loggedUser };
    fetch('http://localhost:5000/get-profile', {
      method: 'POST',
      body: JSON.stringify(loggedUserData),
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then(({ data }) => {
        if (data) {
          console.log('Getting Profile Details');
          console.log(data);
          setUserName(data.name ? data.name : '');
          setImage(data.image);
        }
      });
  }, []);

  return (
    <aside className={props.display ? props.display : 'block'}>
      <div className='flex flex-col items-start'>
        <h1 className='text-md font-bold capitalize'>Add New Ticket</h1>
        <form className='flex flex-col items-start mt-5'>
          {/* Agent Name */}
          <label name='agent-name' className='py-2'>
            Agent
          </label>
          <input
            type='text'
            name='agent-name'
            className='rounded w-full py-2'
            value={userName}
            disabled={true}
          />
          {/* Description */}
          <label name='description' className='py-2'>
            Ticket Description
          </label>
          <input
            type='text'
            name='description'
            className='rounded  w-64 h-64'
            value={ticketDescription}
            onChange={(e) => setTicketDescription(e.target.value)}
          />
          {/* Time Due */}
          <label name='time-due' className='py-2'>
            Time Due(hrs)
          </label>
          <input
            type='text'
            name='time-due'
            className='rounded w-64 h-10'
            value={timeDuration}
            onChange={(e) => setTimeDuration(e.target.value)}
          />
          {/* Priority */}
          <label name='priority' className='py-2'>
            Priority
          </label>
          <select
            name='priority'
            id='priority'
            className='w-24'
            onChange={(e) => setSelectedPriority(e.target.value)}
          >
            <option value='low'>Low</option>
            <option value='urgent'>Urgent</option>
            <option value='high'>High</option>
          </select>
          <button
            className='p-2 bg-red-400 m-4 rounded-md text-black text-md'
            onClick={buttonHandler}
          >
            Add Ticket
          </button>
        </form>
      </div>
    </aside>
  );
};

export default Aside;

/* 
Priority:
Type: starts with(#)

*/
