import PropTypes from 'prop-types';
import MissionBtn from '../buttons/missionBtn';
import RocketBtn from '../buttons/rocketBtn';
import './component.css';

const Component = ({
  reservations, object, message, type,
}) => (
  <div className="reservations-div">
    <h1>
      My
      {object}
    </h1>
    {reservations.length ? (
      <ul className="reservations-div-list">
        {reservations.map(({
          name, id, urlWiki, urlOwn,
        }) => (
          <li className="reservations-div-list-item" key={id}>
            <h2 className="reservations-div-list-item-name">
              {name}
              {' '}
              -
              {' '}
              {urlWiki && <a href={urlWiki} target="_blank" rel="noreferrer">Wiki</a>}
              {' '}
              -
              {' '}
              {urlOwn && <a href={urlOwn} target="_blank" rel="noreferrer">Own Site</a>}
              -
              {' '}
            </h2>
            {type === 'mission' ? (
              <MissionBtn
                className="app-btn-danger"
                text="Leave Mission"
                id={id}
              />
            ) : (
              <RocketBtn
                className="Rocket__btn_Cancel"
                text="Cancel Reservation"
                id={id}
              />
            )}
          </li>
        ))}
      </ul>
    ) : (
      <p className="reservations-div-none">{message}</p>

    )}
  </div>
);

Component.propTypes = {
  reservations: PropTypes.instanceOf(Object).isRequired,
  object: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Component;
