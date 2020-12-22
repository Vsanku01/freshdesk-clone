import React, { useState } from 'react';
import '../components/assets/main.css';

const Login = ({ setIsLogged, setLoggedUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = async (e) => {
    e.preventDefault();
    let userData = {
      email: email,
      password: password,
    };
    fetch('https://freshdesk-backend.herokuapp.com/login', {
      method: 'POST',
      body: JSON.stringify(userData),
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then(async (result) => {
        if (result.flag) {
          console.log(result);
          alert(result.message);
          await setTimeout(() => {
            setIsLogged(true);
            setLoggedUser(email);
          }, 1000);
        } else {
          alert('Error while logging User, Please try again');
          setEmail('');
          setPassword('');
        }
      })
      .catch((err) => console.error(err));
  };

  const changePasswordHandler = async (e) => {
    e.preventDefault();

    let userData = {
      email: email,
      password: password,
    };
    await fetch('https://freshdesk-backend.herokuapp.com/change-password', {
      method: 'POST',
      body: JSON.stringify(userData),
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then(async (result) => {
        if (result.flag) {
          console.log(result);
          alert(result.message);
          await setTimeout(() => {
            setIsLogged(true);
            setLoggedUser(email);
          }, 1000);
        } else {
          alert('Error while changing password, Please try again');
          setEmail('');
          setPassword('');
        }
      })
      .catch((err) => console.error(err));
  };
  return (
    <div className='flex h-screen bg-indigo-700'>
      <div className='w-full max-w-xs m-auto bg-indigo-100 rounded p-5'>
        <header>
          <img
            className='w-20 mx-auto mb-5'
            src='https://img.icons8.com/ultraviolet/40/000000/front-desk.png'
          />
          <i classNameName='fab fa-deskpro fa-5x text-green-400'></i>
        </header>
        <form>
          <div>
            <label className='block mb-2 text-indigo-500' for='username'>
              Email
            </label>
            <input
              className='w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300'
              type='text'
              name='username'
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className='block mb-2 text-indigo-500' for='password'>
              Password
            </label>
            <input
              className='w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300'
              type='password'
              name='password'
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <input
              className='w-full bg-indigo-700 hover:bg-pink-700 text-white font-bold py-2 px-4 mb-6 rounded'
              type='submit'
              onClick={submitHandler}
              value={'Login'}
            />
          </div>
          <div>
            <input
              className='w-full bg-indigo-700 hover:bg-pink-700 text-white font-bold py-2 px-4 mb-6 rounded'
              type='submit'
              onClick={changePasswordHandler}
              value={'Change Password'}
            />
          </div>
        </form>
        <footer>
          <a
            class='text-indigo-700 hover:text-pink-700 text-sm text-center'
            href='#'
          ></a>
        </footer>
      </div>
    </div>
  );
};

export default Login;
