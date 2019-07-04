import React from 'react';

export const initialState = {
  station: null,
  play: false,
  volume: 50
};

const PlayerContext = React.createContext(initialState);

export default PlayerContext;
