import { Component } from 'react';
import s from './Searchbar.module.css';

class SearchBar extends Component {
  state = {
    value: '',
  };

  onFilter = event => {
    const value = event.target.value;
    this.setState({ value });
  };

  onSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    this.props.onSubmit(this.state.value);
    form.reset();
  };

  render() {
    return (
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={this.onSubmit}>
          <button type="submit" className={s.SearchFormButton}>
            <span className={s.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            onChange={this.onFilter}
            className={s.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default SearchBar;
