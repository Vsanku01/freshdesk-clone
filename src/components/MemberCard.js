import React from 'react';
import './assets/main.css';

const MemberCard = ({ name, designation, sap, image, id }) => {
  return (
    <>
      <div className='flex space-x-4 bg-gray-300 p-5 rounded-md items-center m-2'>
        {/* Image */}
        <img
          src={'http://localhost:5000/' + image}
          alt=''
          className='rounded-full h-16 w-16'
        />
        {/* Details */}
        <div className='flex flex-col items-start'>
          <p className='capitalize font-bold'>{name}</p>
          <p>
            <span className='capitalize font-bold'>Designation: </span>
            {designation}
          </p>
          <p>
            {' '}
            <span className='capitalize font-bold'>SAP: </span>
            {sap}{' '}
          </p>
        </div>
      </div>
    </>
  );
};

export default MemberCard;
