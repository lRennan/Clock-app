import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [time, setTime] = useState('');
  const [day, setDay] = useState('');
  const [date, setDate] = useState('');

  const setCaptions = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    setTime(`${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`);
    setDay(now.toLocaleString('default', { weekday: 'long' }));
    setDate(now.toLocaleDateString());
  };

  useEffect(() => {
    setCaptions();
    const intervalId = setInterval(setCaptions, 1000);

    return () => clearInterval(intervalId); 
  }, []);

  return (
    <div className="App">
      <div className="clock">
        <div className="time">{time}</div>
        <div className="day">{day}</div>
        <div className="date">{date}</div>
      </div>
    </div>
  );
};

export default App;
