// PlayersList.js


import Players from './Players'; 
import Player from './Player';
const PlayerList = () => {
  return (
    <div className="players-list">
      {Players.map((pl) => (
        <Player {...pl} />
      ))}
    </div>
  );
};

export default PlayerList ;
