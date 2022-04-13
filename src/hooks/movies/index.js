import { useQueries } from 'react-query';
import {
  getPopularMovies,
  getTopRatedMovies,
  getUpComingMovies,
} from '../../api';

export const useMovies = () =>
  useQueries([
    { queryKey: 'popular', queryFn: getPopularMovies() },
    { queryKey: 'topRated', queryFn: getTopRatedMovies() },
    { queryKey: 'coming', queryFn: getUpComingMovies() },
  ]);
