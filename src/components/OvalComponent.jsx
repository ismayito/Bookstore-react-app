import React, { useEffect, useState } from 'react';
import './Component.css';

const OvalComponent = () => {
  const [random, setRandom] = useState('');
  const randomNumber = Math.floor(Math.random() * 101);
  useEffect(() => {
    setRandom(randomNumber);
  }, []);
  return (
    <div className="ovalContainer">
      <div className="oval" />
      <div className="percentageContainer">
        <p className="percentage">
          {random}
          %
        </p>
        <p className="completed">completed</p>
      </div>
    </div>
  );
};

export default OvalComponent;
