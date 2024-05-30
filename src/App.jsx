import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container text-center">
      <div className="d-flex justify-content-center my-4">
        <a href="https://vitejs.dev" target="_blank" className="mx-2">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" className="mx-2">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="my-4">Vite + React</h1>
      <div className="card p-3">
        <button className="btn btn-success" onClick={() => setCount((count) => count + 1)} >
          Count is {count}
        </button>
        <p className="mt-3">
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs mt-4">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
