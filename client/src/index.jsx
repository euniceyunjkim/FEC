import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App.jsx';
import LandingPage from './Components/LandingPage.jsx';
import { BrowserRouter as Router , Routes, Route, useNavigate } from 'react-router-dom';

let RoutedApp = ({}) => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/:prodID" element={<App />} />
      </Routes>
    </Router>
  )
}

ReactDOM.render(<RoutedApp />, document.getElementById('Joestar'));
