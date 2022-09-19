import { Component } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import SearchBar from './SearchBar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '29242944-2879824970b1213bb04dbe691';

export class App extends Component {
  state = {
    value: '',
    page: 1,
    per_page: 12,
    hits: [],
    isLoading: false,
    error: null,
    totalHits: null,
  };

  getImages = async (v, p) => {
    this.setState({ isLoading: true });

    const res = await axios(
      `/?key=${API_KEY}&q=${v || this.state.value}&image_type=photo&per_page=${
        this.state.per_page
      }&page=${p || this.state.page}`
    ).then(res => {
      return res;
    });

    if (this.state.page === 1) {
      if (+res.data.totalHits === 0) {
        this.setState({ error: true });
        this.notify(`${this.state.value} is not found...`);
      } else {
        this.notify(res.data.totalHits);
        this.setState({ totalHits: res.data.totalHits });
      }
    }

    this.setState({
      isLoading: false,
    });
    return res;
  };

  async componentDidMount() {
    this.value &&
      (await this.getImages(this.state.value || '').then(resp => {
        this.setState({
          hits: resp.data.hits,
        });
      }));
  }

  sendSearchQuery = value => {
    this.setState({ value, page: 1, hits: [] });
    this.setNewImages(value, 1);
  };

  setNewImages(value, p) {
    this.getImages(value, p).then(response => {
      this.setState(prevState => ({
        hits: [...prevState.hits, ...response.data.hits],
        page: prevState.page + 1,
      }));
    });
  }
  onLoadMore = () => {
    this.setNewImages();
  };

  notify = res => {
    toast.info(`We found ${res}`, {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  render() {
    const { isLoading, hits, totalHits, error } = this.state;
    return (
      <div className="App">
        <SearchBar onSubmit={this.sendSearchQuery} />
        <ImageGallery hits={hits} />
        {hits.length && hits.length + 1 <= totalHits ? (
          <Button title="Load More" onClick={this.onLoadMore} />
        ) : (
          ''
        )}
        {isLoading && <Loader />}
        {(error || totalHits) && (
          <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        )}
      </div>
    );
  }
}
