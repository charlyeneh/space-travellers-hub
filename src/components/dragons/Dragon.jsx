import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import styles from './styles/dragon.module.css';
import { toggleReserved } from '../../redux/dragons/dragons';

const Dragon = (props) => {
  const dispatch = useDispatch();
  const {
    image, name, description, reserved, id,
  } = props;
  return (
    <div className="card" style={styles.divContainerStyle}>
      <div className="imageContainer">
        <img src={image} alt="Dragon" />
      </div>
      <div className="Dragon_Info">
        <h2 className="Dragon_Name">{name}</h2>
        <div className="Tag_and_Description">
          <p className="Description">
            <span className={reserved ? styles.tag : styles.none}>Reserved</span>
            {' '}
            {description}
          </p>
        </div>
        <button
          type="button"
          onClick={() => dispatch(toggleReserved(id))}
          className={reserved ? styles.btnReserved : styles.btnReserve}
        >
          {reserved ? 'Cancel Reservation' : 'Reserve Dragon'}
        </button>
      </div>
    </div>
  );
};

Dragon.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default Dragon;
