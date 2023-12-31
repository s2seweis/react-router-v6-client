/* eslint-disable */
import React, { useState } from 'react';
import FacebookLogin from 'react-facebook-login';
import { getCurrentUser } from '../../redux/actions/currentUserAction';
import { useDispatch } from 'react-redux';

const apiUrl =process.env.REACT_APP_API_URL;
    console.log("line:600", apiUrl);

function FacebookLoginComponent(users) {
  const dispatch = useDispatch();

  const [loginData, setLoginData] = useState(
    localStorage.getItem('user')
      ? JSON.parse(localStorage.getItem('user'))
      : null,
  );

  // const handleLogout = () => {
  //   localStorage.removeItem('user');
  //   localStorage.clear();
  //   setLoginData(null);
  //   setTimeout(() => {
  //     window.location.href = '/';
  //   }, 500);
  // };

  const responseFacebook = async response => {

    const apiUrl =process.env.REACT_APP_API_URL;

    const res = await fetch('https://react-router-v6-server-c641af014fb5.herokuapp.com/api/users/facebook-login', {
      method: 'POST',
      body: JSON.stringify({
        userfacebook: response,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const decodedData = await res.json();
    // let test = decodedData;

    localStorage.setItem('user', JSON.stringify(decodedData));

    dispatch(getCurrentUser(loginData));

    setTimeout(() => {
      window.location.href = '/';
    }, 500);
  };

  // let text = users.users.username || 'GUEST';
  // let result = text.toUpperCase ();

  return (
    <div style={{ display: 'flex', justifyContent: 'center', margin: '20px auto' }} className="">

      {loginData
        ? <div style={{ textAlign: 'center' }}>
          <h3 >
            You have an other account?
            {/* { result || 'Google'}{' '} */}
          </h3>
          {/* <button onClick={handleLogout}>Logout</button> */}
        </div>
        :
        <FacebookLogin
          appId="1448062509371972"
          autoLoad={false}
          fields="name,email,picture"
          callback={responseFacebook}
          cssClass="my-facebook-button-class"
          icon="fa-facebook"
        />
      }
    </div>
  );
}

export default FacebookLoginComponent;
