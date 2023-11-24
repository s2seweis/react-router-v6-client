// Overview.js

import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import './Overview.css';

const Overview = (props) => {
  const { users } = useSelector((state) => state.currentUserReducer);
  let text = users.username || 'GUEST';
  let result = text.toUpperCase();

  return (
    <div className="container">
      <div className="public-routes section">
        <p>Public Routes</p>
        <div className="grid-container">
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
          <Link to="/">Overview</Link>
          <Link to="/animation">Animation</Link>
          <Link to="/forgotpassword">Forgot Password</Link>
          <Link to="/resetlink">Reset Link</Link>
        </div>
        <hr className="hr" />
      </div>

      <div className="user-routes section">
        <p>User Routes</p>
        <div className="grid-container">
          <Link to="/products">Products</Link>
          <Link to="/start">Start</Link>
        </div>
        <button className="button" onClick={props.handleLoginPublic}>
          SignIn User Routes
        </button>
        <button className="button" onClick={props.handleLogoutPublic}>
          SignOut User Routes
        </button>
        <p className="status">#Logged in status User Routes: {props.publicUser}</p>
        <hr className="hr" />
      </div>

      <div className="private-routes section">
        <p>Private Routes</p>
        <div className="grid-container">
          <Link to="/admin">Admin</Link>
          <Link to="/settings">Settings</Link>
          <Link to="/settings/roles">User Roles</Link>
        </div>
        <button className="button" onClick={props.handleLoginPrivate}>
          SignIn Private Routes
        </button>
        <button className="button" onClick={props.handleLogoutPrivate}>
          SignOut Private Routes
        </button>
        <p className="status">#Logged in status Private Routes: {props.privateUser}</p>
        <hr className="hr" />
      </div>

      <div className="redirect section">
        <h3>Redirect to the Login Page:</h3>
        <div className="logout-button">
        <button
            onClick={() => {
              localStorage.clear ();
              // localStorage.removeItem('user');
              window.location.href = '/login';
            }}
          >
            Logout {result}
          </button>
        </div>
        <div style={{ marginTop: '30px' }}></div>
      </div>
    </div>
  );
};

Overview.propTypes = {
  handleLoginPublic: PropTypes.func.isRequired,
  handleLogoutPublic: PropTypes.func.isRequired,
  publicUser: PropTypes.string.isRequired,
  handleLoginPrivate: PropTypes.func.isRequired,
  handleLogoutPrivate: PropTypes.func.isRequired,
  privateUser: PropTypes.string.isRequired,
};

export default Overview;
