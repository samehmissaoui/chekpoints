import React from 'react';
import PlayersList from './PlayersList'; // Import the PlayersList 
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <h1>Player List</h1>
      <PlayersList /> {/* Render the PlayersList  */}
    </div>
  );
}
export default App;
