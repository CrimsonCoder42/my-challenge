import React from 'react';
import './App.css'; // Import the separate CSS file
import { useState } from 'react';

function App() {
  const [currentColor, setCurrentColor] = useState('red');


  return (<>
    <div className="App">
      <header className="App-header">
        <div 
        className="box"
        style={{ backgroundColor: currentColor }}
        >Empty Value</div>
        <form >
      <div>
          <label 
          htmlFor="name"
          
          ></label>
          <input
          className="box2"
            type="text"
            id="name"
            name="name"
            onChange={(e) => setCurrentColor(e.target.value)}
            required
          />
        </div>
      </form>
      </header>
      </div>
    
    </>
  );
}

export default App;
