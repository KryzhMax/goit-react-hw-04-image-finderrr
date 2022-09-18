import { Component } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import Searchbar from './Searchbar/Searchbar';
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
    // currentImage: null,
  };

  getImages = (v, p) => {
    // this.setState({ isLoading: true });
    console.log('page', this.state.page);
    return axios(
      `/?key=${API_KEY}&q=${v || this.state.value}&image_type=photo&per_page=${
        this.state.per_page
      }&page=${p || this.state.page}`
    )
      .then(res => {
        return res;
      })
      .finally(this.setState({ isLoading: false }));
  };

  componentDidMount() {
    this.value &&
      this.getImages(this.state.value || '').then(resp => {
        this.setState({
          hits: resp.data.hits,
        });
      });
  }

  // componentDidUpdate(_, prevState) {
  //   console.log(prevState.page);
  //   console.log(this.state.page);
  //   if (prevState.page !== this.page && this.page !== 1) {
  //     // this.setState(prevState => ({
  //     //   value:
  //     return this.getImages(this.state.value);
  //     // }));
  //   }
  // }
  sendSearchQuery = value => {
    this.setState({ value, page: 1, hits: [] });
    this.setNewImages(value, 1);
    // this.getImages(value, 1).then(response => {
    //   this.setState(prevState => ({
    //     hits: response.data.hits,
    //     page: prevState.page + 1,
    //   }));
    // });
    // console.log(value);
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

    // this.setState(prevState => ({ page: prevState.page + 1 }));
    // console.log(this.state.page);
  };

  notify = () =>
    toast('That is all we got!', {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  render() {
    const { isLoading, hits } = this.state;
    console.log(isLoading);
    return (
      <div className="App">
        <Searchbar onSubmit={this.sendSearchQuery} />
        <ImageGallery hits={hits} />
        {/* <Button onClick={this.notify}>Notify </Button> */}
        {!isLoading && <Button title="Load More" onClick={this.onLoadMore} />}
        {isLoading && <Loader />}
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
        {/* {currentImage && (
          <Modal
            value={hits.tags}
            largeImageURL={hits.largeImageURL}
            onClick={this.closeModal}
          />
        )} */}
      </div>
    );
  }
}
