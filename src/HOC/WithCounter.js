import { useState } from 'react';

const WithCounter = (WrappedComponent) => {
  const WithCounter = () => {
    const [count, setCount] = useState(0);

    return <WrappedComponent count={count} setCount={setCount} />;
  };

  return WithCounter;
};

export default WithCounter;
