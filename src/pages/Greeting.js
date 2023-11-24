import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Greeting = () => {
  const [greeting, setGreeting] = useState('');
  console.log(greeting);

  useEffect(() => {
    const fetchGreeting = async () => {
      try {
        const response = await axios.get('https://react-router-v6-server-c641af014fb5.herokuapp.com/greeting');
        setGreeting(response.data.greeting);
      } catch (error) {
        console.error('Error fetching greeting:', error.message);
      }
    };

    fetchGreeting();
  }, []);

  return (
    <div>
      <h1>Greeting Component</h1>
      <p>{greeting}</p>
    </div>
  );
};

export default Greeting;
