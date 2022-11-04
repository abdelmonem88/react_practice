import { useState } from 'react';

function Counter(props) {
  const [count, setCount] = useState(0);
  return <div>{props.render(count, setCount)}</div>;
}

export default Counter;
