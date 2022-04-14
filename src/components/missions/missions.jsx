import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMissionsData } from '../../redux/missions/missions';
import './missions.css';

let loadOance = false;

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missionsReducer);
  useEffect(() => {
    if (!loadOance) {
      dispatch(getMissionsData());
      loadOance = true;
    }
  }, [dispatch]);

  return (
    <div className="missions-container">
      <table className="missions-table">
        <thead>
          <tr>
            <th>
              <h1>Mission</h1>
            </th>
            <th>
              <h1>Description</h1>
            </th>
            <th>
              <h1>Status</h1>
            </th>
            <th>
              <h1>Join</h1>
            </th>
          </tr>
        </thead>
        <tbody>
          {missions.map(({
            id, name, description, reserved,
          }) => (
            <tr key={id}>
              <td className="missions-name">
                <h1>{name}</h1>
              </td>
              <td className="missions-description">
                <p>{description}</p>
              </td>
              <td>
                {reserved ? (
                  <span className="badge badge--primary">ACTIVE MEMBER</span>
                ) : (
                  <span className="badge badge--secondary">NOT A MEMBER</span>
                )}
              </td>
              <td>
                {reserved ? (
                  <span className="app-btn-danger">Leave Mission</span>
                ) : (
                  <span className="app-btn-danger">Join Mission</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Missions;
