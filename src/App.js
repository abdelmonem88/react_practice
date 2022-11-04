import './App.css';
import ClickedCounter from './components/ClickedCounter';
import HoverdCounter from './components/HoverdCounter';

import ClickedCounterTwo from './components/ClickedCounterTwo';
import Counter from './components/Counter';
import HoverdCounterTwo from './components/HoverdCounterTwo';

function App() {
  return (
    <div className='App'>
      <h1
        style={{
          marginBottom: '50px',
        }}
      >
        React Practic
      </h1>
      <ClickedCounter />
      <br />
      <br />
      <HoverdCounter />
      <br />
      <br />
      <Counter
        render={(count, setCount) => (
          <ClickedCounterTwo count={count} setCount={setCount} />
        )}
      />
      <Counter
        render={(count, setCount) => (
          <HoverdCounterTwo count={count} setCount={setCount} />
        )}
      />
    </div>
  );
}

export default App;
