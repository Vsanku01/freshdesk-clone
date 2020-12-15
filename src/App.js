import React, { useState, useEffect } from 'react';
import Login from './components/Login';
import HomePage from './components/HomePage';

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [loggedUser, setLoggedUser] = useState('');
  const [cards, setCards] = useState([]);
  const [refactorCards, setRefactorCards] = useState(false);

  useEffect(() => {
    console.log('Calling from API');
    fetch('http://localhost:5000/view-tickets')
      .then((res) => res.json())
      .then((result) => {
        let cardsLength = result.tickets.length;
        if (cardsLength > 0) {
          let tempCards = [];
          result.tickets.forEach((doc) => {
            doc.forEach((user) => {
              // setCards([...cards, user]);
              tempCards.push(user);
            });
          });
          // setCards([...cards, tempCards]);
          setCards(tempCards);
        }
      });
  }, [refactorCards]);

  return (
    <>
      {isLogged || loggedUser !== '' ? (
        <HomePage
          loggedUser={loggedUser}
          tickets={cards}
          refactorCards={refactorCards}
          setRefactorCards={setRefactorCards}
        />
      ) : (
        <Login setIsLogged={setIsLogged} setLoggedUser={setLoggedUser} />
      )}
    </>
  );
}

export default App;
