import React from 'react';
import Box from './css/container';

const Characteristics = function ({ lable, value }) {
  const renderLable = function () {
    let feedBack = ['loading', 'loading', 'loading'];
    if (lable === 'Size') {
      feedBack = ['A size too small', 'Perfect', 'A size too wide'];
    } else if (lable === 'Width') {
      feedBack = ['Too narrow', 'Perfect', 'Too wide'];
    } else if (lable === 'Comfort') {
      feedBack = ['Uncomfortable', 'Ok', 'Perfect'];
    } else if (lable === 'Quality') {
      feedBack = ['Poor', 'What I expected', 'Perfect'];
    } else if (lable === 'Length') {
      feedBack = ['Runs Short', 'Perfect', 'Runs long'];
    } else if (lable === 'Fit') {
      feedBack = ['Runs tight', 'Perfect', 'Runs long'];
    }
    return (
      <Box.CharText>
        <div style={{ fontSize: '70%' }}>{feedBack[0]}</div>
        <div style={{ fontSize: '70%' }}>{feedBack[1]}</div>
        <div style={{ fontSize: '70%' }}>{feedBack[2]}</div>
      </Box.CharText>
    );
  };
  return (
    <div>
      {lable}
      <Box.Bar>
        <Box.Triangle src="./assets/triangle.png" alt="triangle" style={{ paddingLeft: `${value * 40}px` }} />
      </Box.Bar>
      {renderLable()}
    </div>
  );
};

export default Characteristics;
