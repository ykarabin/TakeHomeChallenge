import List from './components/List';
import withTagsFilter from "./hoc/withTagsFilter";
import withSort from "./hoc/withSort";

export default withSort(withTagsFilter(List));