import React from 'react';
import WithCounter from '../HOC/WithCounter';

function ClickedCounter(props) {
  const { count, setCount } = props;

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
    </div>
  );
}

export default WithCounter(ClickedCounter);
