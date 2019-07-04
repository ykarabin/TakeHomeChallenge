import React, {useContext} from 'react';
import styles from "../../list.module.scss";
import Tags from "components/Tags";
import PlayerContext from 'player-context';

const Index = ({stations = []}) => {
  const {setStation} = useContext(PlayerContext);
  return (
    <ul className={styles.List}>
      {stations.map((station) => {
        const {imgUrl, name, tags, popularity, reliability, id} = station;
        return (
          <li className={styles.ListItem} key={id} onClick={() => {
            setStation(station);
          }}>
            <div className={styles.ImageContainer}>
              <img src={imgUrl} alt={name}/>
            </div>
            <div className={styles.DescriptionContainer}>
              <h3>{name}</h3>
              <span>popularity: {popularity} / reliability: {reliability}</span>
              <Tags tags={tags}/>
            </div>
          </li>
        )
      })}
    </ul>
  )
};

export default Index;
