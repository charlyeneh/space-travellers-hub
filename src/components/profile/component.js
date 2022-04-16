import PropTypes from 'prop-types';
import './component.css';

const Component = ({ reservations, object }) => (
  <div className="reservations-div">
    <h1>
      My
      {' '}
      {object}
    </h1>
    {reservations.length ? (
      <ul className="reservations-div-ist">
        {reservations.map((reservation) => (
          <li className="reservations-div-list-item" key={reservation.id}>
            {reservation.name}
          </li>
        ))}
      </ul>
    ) : (
      <p className="reservations-div-none">No reservation yet</p>
    )}
  </div>
);

Component.propTypes = {
  reservations: PropTypes.instanceOf(Object).isRequired,
  object: PropTypes.string.isRequired,
};

export default Component;
