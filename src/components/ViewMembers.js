import React, { useState, useEffect } from 'react';
import MemberCard from './MemberCard';

const ViewMembers = () => {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    fetch('https://freshdesk-backend.herokuapp.com/get-members')
      .then((res) => res.json())
      .then((result) => {
        console.log(result.members.length);
        setEmployees(result.members);
      });
  }, []);
  return (
    <main className='overflow-auto'>
      {employees.map((employee, index) => {
        const { name, designation, sap, image, _id } = employee;
        return (
          <MemberCard
            key={index}
            name={name}
            designation={designation}
            sap={sap}
            image={image}
            id={_id}
          />
        );
      })}
    </main>
  );
};

export default ViewMembers;
