import React, {useState} from 'react';
import styles from './app.module.scss';
import logo from "./logo.svg";
import Header from 'components/Header';
import Player from 'components/Player';
import StationsList from 'components/StationsList';

import PlayerContext, {initialState} from 'player-context'

function App() {
  const [playerState, setPlayerState] = useState(initialState);

  const setStation = (station) => {
    setPlayerState(state => ({...state, station, play: true}));
  };

  const togglePlay = () => {
    setPlayerState(({play, ...state}) => ({...state, play: !play}));
  };

  const setVolume = (volume) => {
    const validatedVolume = volume > 100 ? 100 : volume < 0 ? 0 : volume
    setPlayerState(state => ({...state, volume: validatedVolume}));
  };

  return (
    <PlayerContext.Provider value={{
      ...playerState, setStation, togglePlay, setVolume
    }}>
      <div className={styles.App}>
        <Header title="Radio" logo={logo}/>
        <main>
          <StationsList/>
        </main>
        <Player/>
      </div>
    </PlayerContext.Provider>
  );
}

export default App;
