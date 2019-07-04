import React, {Fragment, useState} from 'react';
import Sort from "../components/Sort";

function compareStings(a, b) {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0;
}

function compareNumbers(a, b) {
  return a - b;
}

const config = [{
  title: 'Popularity',
  sortBy: 'popularity',
  compareFunction: compareNumbers
}, {
  title: 'Name',
  sortBy: 'name',
  compareFunction: compareStings
}, {
  title: 'Reliability',
  sortBy: 'reliability',
  compareFunction: compareNumbers
}];

const withTagsFilter = (List) => ({stations}) => {
  const [order, setOrder] = useState({
    ...config[0],
    direction: 'DESC'
  });

  let sortedList = stations.sort((a, b) => {
    const {sortBy, direction, compareFunction} = order;
    return compareFunction(a[sortBy], b[sortBy]) * (direction === 'ASC' ? 1 : -1);
  });

  return (
    <Fragment>
      <Sort config={config} order={order} setOrder={setOrder}/>
      <List stations={sortedList}/>
    </Fragment>
  );
};

export default withTagsFilter;