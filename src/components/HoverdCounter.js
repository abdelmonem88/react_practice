import React from 'react';
import WithCounter from '../HOC/WithCounter';

function HoverdCounter(props) {
  const { count, setCount } = props;
  return (
    <div>
      <h3 onMouseOver={() => setCount(count + 1)}>Hovered {count} times</h3>
    </div>
  );
}

export default WithCounter(HoverdCounter);
