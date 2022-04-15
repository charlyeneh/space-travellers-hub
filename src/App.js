import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Header from './components/Header';
import Rockets from './components/Rockets';
import Missions from './components/missions/missions';
import { getMissionsData } from './redux/missions/missions';
import './App.css';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMissionsData());
  }, []);
  return (
    <Router>
      <Header />
      <Routes>
        {/* <Route path="/" element={<h1>Hello Project!</h1>} /> */}
        <Route path="/" element={<Rockets />} />
        <Route path="/dragons" element={<h1>dragons</h1>} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/profile" element={<h1>profile</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
