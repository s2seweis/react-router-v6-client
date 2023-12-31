import axios from 'axios';
import { message } from 'antd';

export const getCurrentUser = () => async dispatch => {

  const apiUrl =process.env.REACT_APP_API_URL;
  
  const bearerToken = JSON.parse(localStorage.getItem('user'));
  dispatch({ type: 'LOADING', payload: true });


  try {
    const response = await axios.get(`https://react-router-v6-server-c641af014fb5.herokuapp.com/api/users/current`, {
      headers: {
        Authorization: `Bearer ${bearerToken}`,
      },
    });
    dispatch({ type: 'GET_CURRENT_USERS', payload: response.data });
    message.success('Get Current User Success');
    dispatch({ type: 'LOADING', payload: false });
  } catch (error) {
    message.error(
      'Something went wrong, Not possible to fetch the CurrentUser from the BAckend!',
    );
    dispatch({ type: 'LOADING', payload: false });
  }
};
