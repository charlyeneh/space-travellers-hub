import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDragonList } from '../../redux/dragons/dragons';
// import Rocket from './Rocket';

function Dragons() {
  const dispatch = useDispatch();
  const dragonList = useSelector((state) => state.dragonReducer);
  useEffect(() => {
    dispatch(getDragonList());
    console.log(dragonList);
  }, []);

  return (
    <div>Dragons</div>
  );
}

export default Dragons;
