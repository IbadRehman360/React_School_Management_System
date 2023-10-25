import React, { useEffect, useState } from 'react';
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './styles/style.css';

const CircularProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const targetPercentage = 78; 
    const increment = 1;

    const timer = setInterval(() => {
      if (progress < targetPercentage) {
        setProgress(progress + increment);
      }
    }, 20);

    return () => clearInterval(timer);
  }, [progress]);

  const customStyles = {
    path: {
      stroke: `#db3d44`,
    },
    text: {
      fill: '#db3d44',
      fontSize: '15px',
      fontWeight: 600,
    },
  };

  return (
    <div className="circular-progress-bar">
      <CircularProgressbar
        value={progress}
        text={`${progress}%`}
        styles={customStyles}
      />
    </div>
  );
};

export default CircularProgressBar;
