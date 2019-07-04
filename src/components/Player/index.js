import React, {useContext} from 'react';
import Tags from 'components/Tags';
import styles from "./player.module.scss";
import PlayerContext from 'player-context';
import Audio from './Audio';

const Player = () => {
  const {station, play, volume, setStation, togglePlay, setVolume} = useContext(PlayerContext)

  if (!station) return null;

  const {name, description, imgUrl, streamUrl, tags} = station;

  return (
    <section className={styles.Player}>
      <div className={styles.StationLogo}>
        <img src={imgUrl} alt={name}/>
      </div>

      <div className={styles.StationDetails}>
        <h2>{name}</h2>
        <p>{description}</p>
        <Tags tags={tags}/>
      </div>

      <div className={styles.StationControls}>
        <div>
          <button className="Close" onClick={() => {
            setStation(null);
          }}>Close
          </button>
          <br/>
          <button className="Play" onClick={togglePlay}>{play ? 'Pause' : 'Play'}</button>
          <br/>
          <button onClick={() => {
            setVolume(volume - 5);
          }}>Volume -
          </button>
          <button onClick={() => {
            setVolume(volume + 5);
          }}>Volume +
          </button>
          <div>Volume: {volume}%</div>
        </div>
        <Audio play={play} volume={volume} src={streamUrl}/>
      </div>
    </section>
  );
};

export default Player;
