import React, { useEffect, useState } from 'react';
import './assets/main.css';

const ViewProfile = ({ loggedUser, refactorProfile }) => {
  const [name, setName] = useState('');
  const [designation, setDesignation] = useState('');
  const [department, setDepartment] = useState('');
  const [sap, setSap] = useState('');
  const [contact, setContact] = useState('');
  const [profileImage, setProfileImage] = useState('');
  const defaultImg =
    'https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60';
  let email = loggedUser;
  useEffect(() => {
    const loggedUserData = { email: loggedUser };
    fetch('https://freshdesk-backend.herokuapp.com/get-profile', {
      method: 'POST',
      body: JSON.stringify(loggedUserData),
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then(({ data }) => {
        console.log('Profile ....', data);
        setName(data.name);
        setDesignation(data.designation);
        setDepartment(data.department);
        setSap(data.sap);
        setContact(data.contact);
        if (data.image === '') {
          setProfileImage(
            'https://via.placeholder.com/150/000000?text=Your+Profile+Picture'
          );
        } else {
          setProfileImage(
            'https://freshdesk-backend.herokuapp.com/' + data.image
          );
        }
      });
  }, [name, refactorProfile, loggedUser]);
  // Changed logged User here
  if (profileImage === null) {
    setProfileImage(defaultImg);
  }
  return (
    <main className='flex flex-row justify-center'>
      <div>
        <img
          src={profileImage}
          alt='profileImage'
          className='rounded-lg h-64 w-auto'
        />
        <div className='flex flex-col items-start p-3 font-bold text-md'>
          <p>
            Name:{' '}
            <span className='text-gray-700'>{name.toLocaleUpperCase()}</span>{' '}
          </p>
          <p>
            Designation: <span>{designation}</span>{' '}
          </p>
          <p>
            Department: <span>{department}</span>{' '}
          </p>
          <p>
            SAP Id: <span>{sap}</span>{' '}
          </p>
          <p>
            Contact Number: <span>{contact}</span>{' '}
          </p>
          <p>
            Email: <span>{email}</span>{' '}
          </p>
        </div>
      </div>
    </main>
  );
};

export default ViewProfile;
