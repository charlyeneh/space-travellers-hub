import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Header from './components/Header';
import Rockets from './components/Rockets';
import Missions from './components/missions/missions';
import Profile from './components/profile/profile';
import { getMissionsData } from './redux/missions/missions';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMissionsData());
  }, []);
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<h1>Hello Project!</h1>} />
        <Route path="/rockets" element={<Rockets />} />
        <Route path="/dragons" element={<h1>dragons</h1>} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default App;
