import React, {useRef, useState} from 'react';
import styles from "./tags-filter.module.scss";

const Index = ({stations = [], setFilter}) => {
  const [showFilter, toggleFilter] = useState(false);
  const filter = useRef(null);
  const tags = stations.map(({tags}) => tags).reduce((uniqueTags, tags) => [...new Set([...uniqueTags, ...tags])], []);

  function onFilter() {
    setFilter([...filter.current.querySelectorAll('input:checked')].map(({value}) => value));
  }

  function onClearFilter() {
    [...filter.current.querySelectorAll('input:checked')].forEach((checkbox) => {
      checkbox.checked = false;
    });
    setFilter([]);
  }

  function onToggleFilter() {
    onClearFilter();
    setFilter([]);
    toggleFilter(showFilter => !showFilter)
  }

  return (
    <div ref={filter} className={styles.Filter}>
      <div>
        <button onClick={onToggleFilter}>Tags Filter</button>
        {showFilter && <button onClick={onClearFilter}>Clear Filter</button>}
      </div>

      {showFilter && tags.map((tag) => (
        <label onClick={onFilter} className={styles.Tag} key={tag}>
          <input type="checkbox" name="tags" value={tag}/>
          <span>{tag}</span>
        </label>))}
    </div>
  );
};

export default Index;
