import React from 'react';
import { useSelector } from 'react-redux';
import Dragon from './Dragon';

function Dragons() {
  const dragonList = useSelector((state) => state.dragonReducer);

  return (
    <div data-testid="dragons" style={{ padding: '1.5rem 2.5rem' }}>
      {dragonList.map((dragon) => (
        <Dragon
          image={dragon.images[0]}
          name={dragon.name}
          description={dragon.description}
          reserved={dragon.reserved}
          id={dragon.id}
          key={dragon.id}
        />
      ))}
    </div>
  );
}

export default Dragons;
