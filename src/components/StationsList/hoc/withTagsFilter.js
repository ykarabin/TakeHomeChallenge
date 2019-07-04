import React, {Fragment, useState} from 'react';
import TagsFilter from "../components/TagsFilter";

const withTagsFilter = (List) => ({stations}) => {
  const [filter, setFilter] = useState([]);

  let filteredList = stations;

  if(filter.length){
    filteredList = filteredList.filter(({tags})=>filter.find((findTag)=>tags.find(tag=>tag===findTag)));
  }

  return (
    <Fragment>
      <TagsFilter stations={stations} setFilter={setFilter}/>
      <List stations={filteredList}/>
    </Fragment>
  );
};

export default withTagsFilter;