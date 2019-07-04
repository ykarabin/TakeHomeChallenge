import axios from 'axios';

export const getStations = async () => {
  const result = await axios(
    'https://s3-us-west-1.amazonaws.com/cdn-web.tunein.com/stations.json',
  );

  return result.data;
};