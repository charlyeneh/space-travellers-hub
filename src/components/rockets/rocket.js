import React from 'react';
import PropTypes from 'prop-types';
import './rocket.css';

const Rocket = ({
  image, name, description,
}) => (
  <li className="rocket">
    <img className="rocket-img" src={image} alt="Rocket img" />
    <div className="rocket-div">
      <h1 className="rocket-name">{name}</h1>
      <div className="rocket-badge-desc-div">
        {/* reserved work */}
        <p className="rocket-description">{description}</p>
      </div>
      <button type="button">Reserve</button>
    </div>
  </li>
);

Rocket.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Rocket;
