import './App.css';
import ClickedCounter from './components/ClickedCounter';
import HoverdCounter from './components/HoverdCounter';

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
    </div>
  );
}

export default App;
