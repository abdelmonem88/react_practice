import React from 'react';

function ClickedCounterTwo(props) {
  const { count, setCount } = props;

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
    </div>
  );
}

export default ClickedCounterTwo;
