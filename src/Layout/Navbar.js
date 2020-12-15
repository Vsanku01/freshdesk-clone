import React from 'react';

const Navbar = ({ iconClicked, setIconClicked, setHeaderName }) => {
  return (
    <nav style={{ background: '#3a5668' }}>
      <button>
        <i class='fas fa-headset fa-lg' style={{ color: 'white' }}></i>
      </button>
      <br />
      {/* viewProfile */}
      <button
        onClick={() => {
          setIconClicked({
            viewProfile: true,
            viewTicket: false,
            viewMembers: false,
            addMember: false,
            viewSettings: false,
          });
          setHeaderName('Profile');
        }}
        className={iconClicked.viewProfile ? 'text-white' : 'text-gray-600'}
      >
        <i className='fas fa-user fa-lg'></i>
      </button>
      {/* viewTicket */}
      <button
        onClick={() => {
          setIconClicked({
            viewProfile: false,
            viewTicket: true,
            viewMembers: false,
            addMember: false,
            viewSettings: false,
          });
          setHeaderName('New and Open tickets');
        }}
        className={iconClicked.viewTicket ? 'text-white' : 'text-gray-600'}
      >
        <i class='fas fa-ticket-alt fa-lg'></i>
      </button>
      {/* viewMembers */}
      <button
        onClick={() => {
          setIconClicked({
            viewProfile: false,
            viewTicket: false,
            viewMembers: true,
            addMember: false,
            viewSettings: false,
          });
          setHeaderName('Employees');
        }}
        className={iconClicked.viewMembers ? 'text-white' : 'text-gray-600'}
      >
        <i class='fas fa-users fa-lg'></i>
      </button>
      {/* addMember */}
      <button
        onClick={() => {
          setIconClicked({
            viewProfile: false,
            viewTicket: false,
            viewMembers: false,
            addMember: true,
            viewSettings: false,
          });
          setHeaderName('Add Organization Member');
        }}
        className={iconClicked.addMember ? 'text-white' : 'text-gray-600'}
      >
        <i class='fas fa-user-plus fa-lg'></i>
      </button>
      {/* viewSettings or Sign In <i class="fas fa-sign-in-alt"></i>*/}
      <button
        onClick={() => {
          setIconClicked({
            viewProfile: false,
            viewTicket: false,
            viewMembers: false,
            addMember: false,
            viewSettings: true,
          });
          setHeaderName('Sign Out');
        }}
        className={iconClicked.viewSettings ? 'text-white' : 'text-gray-600'}
      >
        <i class='fas fa-sign-in-alt fa-lg'></i>
      </button>
    </nav>
  );
};

export default Navbar;
