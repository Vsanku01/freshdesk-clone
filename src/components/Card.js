import React from 'react';
import './assets/main.css';
import './assets/style.css';

const Card = ({ details, display }) => {
  let { name, description, priority, due, date, image, _id, email } = details
    ? details
    : '';
  // console.log('Card', details);

  const deleteHandler = (e) => {
    console.log('Clicked Delete');
    console.log(_id, email);
  };
  return (
    <>
      <div className='flex space-x-4 bg-gray-300 p-5 rounded-md items-center m-2 card'>
        {/* Image */}
        <img
          src={'https://freshdesk-backend.herokuapp.com/' + image}
          alt='profileImage'
          className='rounded-full h-16 w-16'
        />
        {/* Details */}
        <div className='flex flex-col items-start'>
          <div className='flex flex-row justify-center items-center'>
            <p className='text-xs border border-green-400 p-1 m-1'>New</p>
            <p className='text-sm font-medium capitalize'>
              {priority ? priority : ''}
            </p>
          </div>
          <p className='text-sm font-bold space-y-1 text-gray-600'>
            {description ? description : ''}
          </p>
          <div className='flex-row'>
            <i className='fas fa-phone-alt px-1'></i>
            <span className='text-xs font-bold'>{name ? name : ''}</span>
            <span className='font-extrabold'>. </span>
            <span className='text-xs'>{date ? date : ''}</span>
            <span className='font-extrabold'>. </span>
            <span className='text-xs'>{`Due in ${due ? due : ''} hours`}</span>
            <i
              className={` fas fa-trash-alt  ml-3 ${display}`}
              onClick={deleteHandler}
            ></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
