import React from 'react';
import styles from "./tags.module.scss";

const Tags = ({tags = []}) => (
  <ul className={styles.Tags}>
    {tags.map((tag) => <li key={tag}>{tag}</li>)}
  </ul>
);

export default Tags;
