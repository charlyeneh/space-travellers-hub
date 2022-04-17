import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { toggleReserved } from '../../redux/rockets/rockets';

const RocketBtn = ({ className, text, id }) => {
  const dispatch = useDispatch();
  return (
    <button
      type="button"
      onClick={() => dispatch(toggleReserved(id))}
      className={className}
    >
      {text}
    </button>
  );
};

RocketBtn.propTypes = {
  className: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
};

export default RocketBtn;
