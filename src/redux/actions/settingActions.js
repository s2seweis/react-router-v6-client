import axios from 'axios';
import {message} from 'antd';
const apiUrl =process.env.REACT_APP_API_URL;

export const getAllSettings=()=>async dispatch=>{
    
    dispatch({type: 'LOADING' , payload:true});
    
    try {
        const response = await axios.get(`https://react-router-v6-server-c641af014fb5.herokuapp.com/api/settings/getallsettings`);
        dispatch({type: 'GET_ALL_SETTINGS', payload:response.data});
        dispatch({type: 'LOADING' , payload:false});
    } catch (error) {
        console.log(error);
        dispatch({type: 'LOADING' , payload:false});
    }    
};

export const editSetting=(reqObj)=>async dispatch=>{

    dispatch({type: 'LOADING' , payload:true});

    try {
         await axios.post(`https://react-router-v6-server-c641af014fb5.herokuapp.com/api/settings/editsetting` , reqObj);
       
         dispatch({type: 'LOADING' , payload:false});
         message.success('Setting details updated successfully');
         setTimeout(() => {
            window.location.href='/settings';
         }, 500);
    } catch (error) {
        console.log(error);
        dispatch({type: 'LOADING' , payload:false});
    }
};