import { Component } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import * as basicLightbox from 'basiclightbox';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
// import Modal from './Modal/Modal';

// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '29242944-2879824970b1213bb04dbe691';

export class App extends Component {
  state = {
    value: '',
    page: 1,
    per_page: 12,
    hits: [],
  };

  getimages = v => {
    axios
      .get(
        `/?key=${API_KEY}&q=${
          v || this.state.value
        }&image_type=photo&per_page=${this.state.per_page}&page=${
          this.state.page
        }`
      )
      .then(res => {
        console.log(res);
        this.setState({ hits: res.data.hits });
      });
  };

  componentDidMount() {
    this.value && this.getimages(this.state.value || '');
  }

  sendSearchQuery = value => {
    this.setState({ value });
    this.getimages(value);
    // console.log(value);
  };

  notify = () =>
    toast('Wow so easy!', {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.sendSearchQuery} />
        <ImageGallery hits={this.state.hits} />
        <Button onClick={this.notify}>Notify </Button>
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
        {/* <Modal /> */}
      </div>
    );
  }
}
