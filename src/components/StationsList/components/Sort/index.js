import React, {useRef} from 'react';
import styles from "./sort.module.scss";

const Sort = ({config, order, setOrder}) => {
  const sortBy = useRef(null);
  const direction = useRef(null);

  function onSort() {
    setOrder({
      ...config.find(({sortBy: prop}) => prop === sortBy.current.value),
      direction: direction.current.value
    })
  }

  return (
    <div className={styles.Sort}>
      Order by:
      <select ref={sortBy} onChange={onSort} value={order.sortBy}>
        {config.map(({title, sortBy}) => (
          <option value={sortBy} key={sortBy}>{title}</option>
        ))}
      </select>
      direction:
      <select ref={direction} onChange={onSort} value={order.direction}>
        <option value="ASC">ASC</option>
        <option value="DESC">DESC</option>
      </select>
    </div>
  );
};

export default Sort;
