import React from 'react';
import '../components/assets/main.css';

const Header = ({ headerName }) => {
  return (
    <header>
      <div className='flex flex-col items-start'>
        <div className='flex items-start text-md font-bold h-5'>
          <h1>{headerName ? headerName : 'New and Open Tickets'}</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
