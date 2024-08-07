import React from 'react';
import Player from './Player'; // Assurez-vous que ce chemin est correct
import players from '../players'; // Assurez-vous que ce chemin est correct

const PlayersList = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {players.map((player, index) => (
        <Player key={index} {...player} />
      ))}
    </div>
  );
};

export default PlayersList;
