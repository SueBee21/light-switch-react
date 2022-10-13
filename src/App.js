import './App.css';
import { useState } from 'react';

function App() {
  const [status, changeStatus] = useState(false);
  //const status = false;

  return (
    <div className="App">
      <button onClick={() => changeStatus(!status)}>
        This light is {status ? "on" : "off"}!
      </button>
    </div>
  );
}

export default App;
