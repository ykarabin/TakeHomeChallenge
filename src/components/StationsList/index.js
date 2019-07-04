import React, {useState, useEffect} from 'react';
import StationsList from './StationsList';
import styles from "./list.module.scss";
import {getStations} from 'api/stations';

export default () => {
  const [stations, setStations] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const stations = await getStations();
      setStations(stations.data);
    }

    fetchData();
  }, []);

  return (
    <section className={styles.ListContainer}>
      <StationsList stations={stations}/>
    </section>
  );
};
