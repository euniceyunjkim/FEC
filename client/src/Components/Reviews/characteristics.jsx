import React from 'react';
import PropTypes from 'prop-types';
import Box from './css/container';

// this function taks and displays all of the Characteristics
// of whatever product we are currently looking at
const Characteristics = function Characteristics({ lable, value }) {
  // renders smaller labels for how Characteristics are rated
  const renderLable = function renderLable() {
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
        <div style={{ fontSize: '50%' }}>{feedBack[0]}</div>
        <div style={{ fontSize: '50%' }}>{feedBack[1]}</div>
        <div style={{ fontSize: '50%' }}>{feedBack[2]}</div>
      </Box.CharText>
    );
  };
  return (
    <div>
      {lable}
      <Box.Bar>
        <Box.Triangle src="./assets/triangle.webp" alt="triangle" style={{ paddingLeft: `${(value * 20) - 2}%` }} />
      </Box.Bar>
      {renderLable()}
    </div>
  );
};
// prop validation
Characteristics.propTypes = {
  lable: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};
export default Characteristics;
