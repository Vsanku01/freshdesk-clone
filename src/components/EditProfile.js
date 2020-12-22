import Axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import '../components/assets/main.css';

const EditProfile = ({ loggedUser, setRefactorProfile, refactorProfile }) => {
  const [name, setName] = useState('');
  const [designation, setDesignation] = useState('');
  const [department, setDepartment] = useState('');
  const [sap, setSap] = useState('');
  const [contact, setContact] = useState('');
  // File
  const [file, setFile] = useState();

  useEffect(() => {
    const profileData = { email: loggedUser };
    fetch('https://freshdesk-backend.herokuapp.com/get-profile', {
      method: 'POST',
      body: JSON.stringify(profileData),
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((result) => {
        let { name, designation, department, sap, contact } = result.data;
        console.log(name, designation, department, sap, contact);
        setName(name);
        setDesignation(designation);
        setDepartment(department);
        setSap(sap);
        setContact(contact);
      });
  }, []);

  const buttonHandler = async (e) => {
    e.preventDefault();
    const userData = {
      email: loggedUser,
      name,
      designation,
      department,
      sap,
      contact,
    };
    console.log(userData);
    // FormData
    const formData = new FormData();
    formData.append('email', loggedUser);
    formData.append('name', name);
    formData.append('designation', designation);
    formData.append('department', department);
    formData.append('sap', sap);
    formData.append('contact', contact);
    formData.append('profileImage', file);

    Axios.post('https://freshdesk-backend.herokuapp.com/edit-profile', formData)
      .then((res) => {
        if (res.data.flag) {
          alert('Profile Edited Successfully');
          setRefactorProfile(!refactorProfile);
        } else {
          alert('Please try again after sometime');
        }
      })
      .catch((err) => console.log(err));

    // // fetch
    // await fetch('https://freshdesk-backend.herokuapp.com/edit-profile', {
    //   method: 'POST',
    //   body: JSON.stringify(userData),
    //   headers: {
    //     // 'Content-type': 'multipart/form-data',
    //     'Content-Type': 'multipart/form-data',
    //   },
    // })
    //   .then((res) => res.json())
    //   .then((result) => {
    //     if (result.flag) {
    //       alert('Profile Edited Successfully');
    //       setRefactorProfile(!refactorProfile);
    //     } else {
    //       alert('Please try again after sometime');
    //     }
    //   })
    //   .catch((err) => console.log(err));
  };

  return (
    <aside>
      <div className='flex flex-col items-start'>
        <h1 className='text-md font-bold capitalize'>Edit Profile</h1>
        <form className='flex flex-col items-start mt-5' action='#'>
          {/* Email */}
          <label name='email' className='py-2' htmlFor='email'>
            Email
          </label>
          <input
            type='text'
            name='email'
            className='rounded w-full p-2'
            disabled={true}
            value={loggedUser}
            required={true}
          />
          {/* Agent Name */}
          <label name='agent-name' className='py-2' htmlFor='agent-name'>
            Name
          </label>
          <input
            type='text'
            name='agent-name'
            className='rounded w-full p-2 capitalize'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {/* Designation */}
          <label name='designation' className='py-2' htmlFor='designation'>
            Designation
          </label>
          <input
            type='text'
            name='designation'
            className='rounded h-10 w-full p-2'
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
          />
          {/* Department */}
          <label name='department' className='py-2' htmlFor='department'>
            Department
          </label>
          <input
            type='text'
            name='department'
            className='rounded w-full p-2'
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          />
          {/* SAP ID */}
          <label name='sap' className='py-2' htmlFor='sap'>
            SAP ID
          </label>
          <input
            type='text'
            name='sap'
            className='rounded w-full p-2'
            value={sap}
            onChange={(e) => setSap(e.target.value)}
          />
          {/* Contact*/}
          <label name='contact' className='py-2' htmlFor='contact'>
            Contact Number
          </label>
          <input
            type='text'
            name='contact'
            className='rounded w-full p-2'
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
          {/* Profile Image */}
          <label name='profileImage' className='py-2' htmlFor='profileImage'>
            Profile Image
          </label>
          <input
            type='file'
            name='profileImage'
            id='profileImage'
            onChange={(event) => {
              const file = event.target.files[0];
              setFile(file);
            }}
          />

          <button
            className='p-2 bg-red-400 m-4 rounded-md text-white text-md font-bold'
            onClick={buttonHandler}
            type='submit'
          >
            Submit
          </button>
        </form>
      </div>
    </aside>
  );
};

export default EditProfile;
