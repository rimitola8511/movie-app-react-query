import axioInstance from '../plugins/axios';

export const getPopularMovies = () => {
  return () =>
    axioInstance.get('/popular', {
      params: {
        api_key: process.env.REACT_APP_URL_KEY,
        page: 1,
        language: 'es-CO',
      },
    });
};

export const getTopRatedMovies = () => {
  return () =>
    axioInstance.get('/top_rated', {
      params: {
        api_key: process.env.REACT_APP_URL_KEY,
        page: 1,
        language: 'es-CO',
      },
    });
};

export const getUpComingMovies = () => {
  return () =>
    axioInstance.get('/upcoming', {
      params: {
        api_key: process.env.REACT_APP_URL_KEY,
        page: 1,
        language: 'es-CO',
      },
    });
};
