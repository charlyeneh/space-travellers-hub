import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Missions from './components/missions/missions';
import Profile from './components/profile/Profile';
import Rockets from './components/rockets/Rockets';
import Navbar from './components/Header';
import './App.css';
import { getRocketList } from './redux/rockets/rockets';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRocketList());
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Rockets />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/missions" element={<Missions />} />
      </Routes>
    </div>
  );
};

export default App;
