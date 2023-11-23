import axios from 'axios';
import { message } from 'antd';
const apiUrl =process.env.REACT_APP_API_URL;

export const getAllUsers = () => async dispatch => {

  dispatch({ type: 'LOADING', payload: true });
  // const apiUrl =process.env.REACT_APP_API_URL;

  try {
    const response = await axios.get(`${apiUrl}/api/users/getallusers`);
    dispatch({ type: 'GET_ALL_USERS', payload: response.data });
    dispatch({ type: 'LOADING', payload: false });
  } catch (error) {
    console.log(error);
    dispatch({ type: 'LOADING', payload: false });
  }
};

export const deleteUser = (reqObj) => async dispatch => {

  dispatch({ type: 'LOADING', payload: true });

  try {
    // const apiUrl =process.env.REACT_APP_API_URL;
    await axios.post(`${apiUrl}/api/users/deleteuser`, reqObj);

    dispatch({ type: 'LOADING', payload: false });
    message.success('User deleted successfully');
    setTimeout(() => {
      window.location.reload();
    }, 500);
  } catch (error) {
    console.log(error);
    dispatch({ type: 'LOADING', payload: false });
  }
};

export const addUser = reqObj => async dispatch => {
  dispatch({ type: 'LOADING', payload: true });
  try {
    const response = await axios.post(`${apiUrl}/api/users/adduser`, reqObj);
    message.success('New user added successfully');
    dispatch({ type: 'LOADING', payload: false });
  } catch (error) {
    message.error(
      'Something went wrong, maybe the email is registered already under an other account!',
    );
    console.log(error);
    dispatch({ type: 'LOADING', payload: false });
  }
};

export const editUser = (reqObj) => async dispatch => {

  dispatch({ type: 'LOADING', payload: true });

  try {
    await axios.post(`${apiUrl}/api/users/edituser`, reqObj);

    dispatch({ type: 'LOADING', payload: false });
    message.success('User details updated successfully');

  } catch (error) {
    console.log(error);
    dispatch({ type: 'LOADING', payload: false });
  }
};