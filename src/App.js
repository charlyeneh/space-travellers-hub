import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Missions from './components/missions/missions';
import Profile from './components/profile/profile';
import Rockets from './components/rockets/Rockets';
import Dragons from './components/dragons/Dragons';
import Navbar from './components/Header';
import './App.css';
import { getRocketList } from './redux/rockets/rockets';
import { getDragonList } from './redux/dragons/dragons';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRocketList());
    dispatch(getDragonList());
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Rockets />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/dragons" element={<Dragons />} />
        <Route path="/missions" element={<Missions />} />
      </Routes>
    </div>
  );
};

export default App;
