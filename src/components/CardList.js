import React, { useState, useEffect } from 'react';
import './assets/main.css';
import Card from './Card';

const CardList = ({ tickets, loggedUser }) => {
  useEffect(() => {
    // console.log('Ticket Changed');
    // console.log(tickets);
  }, [tickets]);
  return (
    <main className='overflow-auto flex-col-reverse'>
      {/* {tickets[tickets.length - 1].length > 0
        ? tickets[tickets.length - 1].map((ticket, idx) => {
            return <Card details={ticket} key={idx} />;
          })
        : 'Empty'} */}
      {/* {tickets[0].length > 0
        ? tickets[0].map((ticket, idx) => {
            return <Card details={ticket} key={idx} />;
          })
        : 'Empty'} */}
      {tickets
        .slice(0)
        .reverse()
        .map((ticket, idx) => {
          let display = '';
          if (ticket.email === loggedUser) {
            display = 'inline';
          } else {
            display = 'hidden';
          }
          return <Card details={ticket} key={idx} display={display} />;
        })}
    </main>
  );
};

export default CardList;

/* 
      {tickets[0].length > 0
        ? tickets[0].map((ticket, idx) => {
            return <Card details={ticket} key={idx} />;
          })
        : 'Empty'}
*/
