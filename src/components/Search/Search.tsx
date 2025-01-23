import styles from './Search.module.scss';
import { GrSearch } from "react-icons/gr";

interface SearchProps {
  search: string;
  setSearch: (value: string) => void;
}

export const Search: React.FC<SearchProps> = ({ search, setSearch }) => {
  return (
    <div className={styles.search}>
      <input
        type="text"
        className={styles.search__input}
        placeholder="Search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
    <GrSearch className={styles.search__icon} />
    </div>
  );
};
