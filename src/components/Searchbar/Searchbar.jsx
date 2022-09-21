import { useState } from 'react';
import s from './Searchbar.module.css';

const SearchBar = ({ callback }) => {
  const [value, setValue] = useState('');

  const onFilter = event => {
    const value = event.target.value;
    setValue(value);
  };

  const onSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    callback(value);
    form.reset();
  };

  return (
    <header className={s.Searchbar}>
      <form className={s.SearchForm} onSubmit={onSubmit}>
        <button type="submit" className={s.SearchFormButton}>
          <span className={s.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          onChange={onFilter}
          className={s.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

export default SearchBar;
