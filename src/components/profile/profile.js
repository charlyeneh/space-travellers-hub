import { useSelector } from 'react-redux';
import Component from './component';
import './profile.css';

const Profile = () => {
  const rockets = useSelector((state) => state.rocketReducer);
  const missions = useSelector((state) => state.missionsReducer);
  const dragons = useSelector((state) => state.dragonReducer);
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
      <Component
        reservations={dragons.filter((dragon) => dragon.reserved === true)}
        object="Dragons"
        message="No dragons reserved"
        type="rocket"
      />
    </div>
  );
};

export default Profile;
