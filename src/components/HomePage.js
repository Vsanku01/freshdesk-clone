import React, { useState, useEffect } from 'react';
import Navbar from '../Layout/Navbar';
import CardList from './CardList';
import Header from '../Layout/Header';
import Aside from '../Layout/Aside';
import ViewProfile from './ViewProfile';
import EditProfile from './EditProfile';
import AddMember from './AddMember';
import ViewMembers from './ViewMembers';
import '../App.css';
import './assets/main.css';

const HomePage = ({ loggedUser, tickets, refactorCards, setRefactorCards }) => {
  const [iconClicked, setIconClicked] = useState({
    viewProfile: false,
    viewTicket: true,
    viewMembers: false,
    addMember: false,
    viewSettings: false,
  });

  const [refactorProfile, setRefactorProfile] = useState(false);

  useEffect(() => {
    if (loggedUser !== '') {
      alert(`Logged as ${loggedUser}`);
    }
    console.log('Logged User', loggedUser);
  }, [loggedUser]);
  // TODO: ADD loggedUser as dependency above

  // const [editTicket, setEditTicket] = useState(false);
  const [headerName, setHeaderName] = useState('');

  return (
    <div id='home'>
      <Header headerName={headerName} />
      <Navbar
        iconClicked={iconClicked}
        setIconClicked={setIconClicked}
        setHeaderName={setHeaderName}
      />
      {iconClicked.viewTicket ? (
        <CardList
          tickets={tickets}
          refactorCards={refactorCards}
          setRefactorCards={setRefactorCards}
          loggedUser={loggedUser}
        />
      ) : (
        ''
      )}
      {/* View Profile */}
      {iconClicked.viewProfile ? (
        <ViewProfile
          loggedUser={loggedUser}
          refactorProfile={refactorProfile}
          setRefactorProfile={setRefactorProfile}
        />
      ) : (
        ''
      )}
      {iconClicked.viewProfile ? (
        <EditProfile
          loggedUser={loggedUser}
          refactorProfile={refactorProfile}
          setRefactorProfile={setRefactorProfile}
        />
      ) : (
        <Aside
          loggedUser={loggedUser}
          refactorCards={refactorCards}
          setRefactorCards={setRefactorCards}
        />
      )}
      {/* View Members */}
      {iconClicked.viewMembers ? <ViewMembers /> : ''}
      {iconClicked.viewMembers ? (
        <aside className='font-bold'>Urgent Notifications</aside>
      ) : (
        ''
      )}
      {/* Add Member */}
      {iconClicked.addMember ? <AddMember /> : ''}
      {iconClicked.addMember ? (
        <aside className='font-bold'>Urgent Notifications</aside>
      ) : (
        ''
      )}

      {/* View Settings */}
      {iconClicked.viewSettings ? window.location.reload() : ''}
      {iconClicked.viewSettings ? <aside></aside> : ''}

      {/* <CardList /> */}
      {/* <nav></nav> */}
      {/* <footer>footer</footer> */}
    </div>
  );
};

export default HomePage;
