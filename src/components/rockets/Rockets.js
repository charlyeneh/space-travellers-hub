import React, { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getRocketList } from '../../redux/rockets/rockets';
import Rocket from './Rocket';

const Rockets = () => {
  const rocketList = useSelector((state) => state.rocketReducer, shallowEqual);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRocketList);
  }, []);

  return (
    <div>
      {rocketList.map((rocket) => (
        <Rocket
          image={rocket.images[0]}
          name={rocket.name}
          description={rocket.description}
          reserved={rocket.reserved}
          id={rocket.id}
          key={rocket.id}
        />
      ))}
    </div>
  );
};

export default Rockets;
