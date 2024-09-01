import css from "./SearchBox.module.css";
import PropTypes from 'prop-types';

function SearchBox({ value, handleFilter }) {
  return (
    <label className={css.searchWrapper}>
      <span className={css.label}>Find contacts by name</span>
      <input
        className={css.searchBar}
        type="text"
        name="searchBar"
        placeholder="type..."
        value={value}
        onChange={handleFilter}
      />
    </label>
  );
}
SearchBox.propTypes = {
  value: PropTypes.string.isRequired,
  handleFilter: PropTypes.func.isRequired,
};

export default SearchBox;