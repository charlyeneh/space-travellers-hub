import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Rockets from './components/rockets/rockets';
import Missions from './components/missions/missions';
import Profile from './components/profile/profile';
// import { getMissionsData } from './redux/missions/missions';
import './App.css';

const App = () => (
  <div className="App">
    <Header />
    <main className="main-app">
      <Routes>
        {/* <Route path="/" element={<h1>Hello Project!</h1>} /> */}
        <Route path="/" element={<Rockets />} />
        <Route path="/dragons" element={<h1>dragons</h1>} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </main>
  </div>
);

export default App;
