import React, { useState } from 'react';
import Box from './css/container';

const PickCharacteristics = function ({ charKey, lable, char}) {
  const [check, setCheck] = useState(0);
  const setChar = function (value) {
    char[charKey] = value;
    setCheck(value);
  };
  let feedBack = ['loading', 'loading', 'loading'];
  if (lable === 'Size') {
    feedBack = ['A size too small', '½ a size too small', 'Perfect', '½ a size too big', 'A size too wide'];
  } else if (lable === 'Width') {
    feedBack = ['Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide'];
  } else if (lable === 'Comfort') {
    feedBack = ['Uncomfortable', 'Slightly uncomfortable', 'Ok', 'Comfortable', 'Perfect'];
  } else if (lable === 'Quality') {
    feedBack = ['Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect'];
  } else if (lable === 'Length') {
    feedBack = ['Runs Short', 'Runs slightly short', 'Perfect', 'Runs slightly long', 'Runs long'];
  } else if (lable === 'Fit') {
    feedBack = ['Runs tight', 'Runs slightly tight', 'Perfect', 'Runs slightly long', 'Runs long'];
  }
  return (
    <div>
      <br />
      {lable}
      <div style={{ fontSize: '70%' }}>
        {check === 1
          ? <Box.StarCheck src="./assets/fullStar.webp" alt="full star" onClick={() => setChar(1)} />
          : <Box.StarCheck src="./assets/emptyStar.webp" alt="empty star" onClick={() => setChar(1)} />}
        {feedBack[0]}
        {check === 2
          ? <Box.StarCheck src="./assets/fullStar.webp" alt="full star" onClick={() => setChar(2)} />
          : <Box.StarCheck src="./assets/emptyStar.webp" alt="empty star" onClick={() => setChar(2)} />}
        {feedBack[1]}
        {check === 3
          ? <Box.StarCheck src="./assets/fullStar.webp" alt="full star" onClick={() => setChar(3)} />
          : <Box.StarCheck src="./assets/emptyStar.webp" alt="empty star" onClick={() => setChar(3)} />}
        {feedBack[2]}
        {check === 4
          ? <Box.StarCheck src="./assets/fullStar.webp" alt="full star" onClick={() => setChar(4)} />
          : <Box.StarCheck src="./assets/emptyStar.webp" alt="empty star" onClick={() => setChar(4)} />}
        {feedBack[3]}
        {check === 5
          ? <Box.StarCheck src="./assets/fullStar.webp" alt="full star" onClick={() => setChar(5)} />
          : <Box.StarCheck src="./assets/emptyStar.webp" alt="empty star" onClick={() => setChar(5)} />}
        {feedBack[4]}
      </div>
    </div>
  );
};

export default PickCharacteristics;
