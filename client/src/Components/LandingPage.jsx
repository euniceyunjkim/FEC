import React from 'react';
import { useNavigate } from 'react-router-dom';

let LandingPage = ({}) => {
  let navigate = useNavigate();
  return (
    <button onClick={() => {navigate("/40346")}}>Go to product</button>
  )
}

export default LandingPage;