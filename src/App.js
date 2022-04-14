import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Header from './components/Header';
import Missions from './components/missions/missions';
import { getMissionData } from './redux/missions/missions';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMissionData());
  }, []);
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<h1>Hello Project!</h1>} />
        <Route path="/rockets" element={<h1>rockets</h1>} />
        <Route path="/dragons" element={<h1>dragons</h1>} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/profile" element={<h1>profile</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
