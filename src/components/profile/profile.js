import { useSelector } from 'react-redux';
import Component from './component';
import './profile.css';

const Profile = () => {
  const rockets = useSelector((state) => state.rocketReducer);
  const missions = useSelector((state) => state.missionsReducer);
  return (
    <div className="reservations">
      <Component
        reservations={missions.filter((mission) => mission.reserved === true)}
        object="Missions"
        message="No missions joined"
        type="mission"
      />
      <Component
        reservations={rockets.filter((rocket) => rocket.reserved === true)}
        object="Rockets"
        message="No rockets reserved"
        type="rocket"
      />
    </div>
  );
};

export default Profile;
