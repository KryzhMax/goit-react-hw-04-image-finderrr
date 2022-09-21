import { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import SearchBar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '29242944-2879824970b1213bb04dbe691';

export const App = () => {
  const [value, setValue] = useState('');
  const [page, setPage] = useState(1);
  const [hits, setHits] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalHits, setTotalHits] = useState(null);
  const getImages = async (v, p) => {
    setIsLoading(true);

    const res = await axios(
      `/?key=${API_KEY}&q=${value}&image_type=photo&per_page=12&page=${page}`
    ).then(res => {
      return res;
    });

    if (page === 1) {
      if (+res.data.totalHits === 0) {
        setError(true);
        notify(`${value} is not found...`);
      } else {
        notify(res.data.totalHits);
        setTotalHits(res.data.totalHits);
      }
    }
    setHits(prev => [...prev, ...res.data.hits]);
    setIsLoading(false);
    return res;
  };

  useEffect(() => {
    value && getImages(value, page);
    // eslint-disable-next-line
  }, [value, page]);

  const setNewImages = (value, p) => {
    setPage(page + 1);
  };

  const sendSearchQuery = value => {
    setValue(value);
    setPage(1);
    setHits([]);
  };

  const onLoadMore = () => {
    setNewImages();
  };

  function notify(res) {
    toast.info(`We found ${res}`, {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  return (
    <div className="App">
      <SearchBar callback={sendSearchQuery} />
      <ImageGallery hits={hits} />
      {hits.length && hits.length + 1 <= totalHits ? (
        <Button title="Load More" onClick={onLoadMore} />
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
};
