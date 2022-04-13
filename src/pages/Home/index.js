import MovieList from '../../components/MovieList';
import MoviesCarousel from '../../components/MoviesCarousel';
import Error from '../../components/Error';
import SinglePageLayout from '../../components/SinglePageLayout';

import { useMovies } from '../../hooks/movies';

import { normalizeMoviesResponse } from '../../helpers/normalizeResponseMovies';

function Home() {
  const [popularMovies, topMovies, comingMovies] = useMovies();

  if (popularMovies.isError || topMovies.isError || comingMovies.isError)
    return <Error />;

  return (
    <>
      <SinglePageLayout>
        <MovieList title="Más populares" subTitle="Nullan sapien arcu tempor">
          <MoviesCarousel
            movies={
              popularMovies.data
                ? normalizeMoviesResponse(popularMovies.data.data.results)
                : []
            }
            loading={popularMovies.isLoading}
          />
        </MovieList>

        <MovieList title="Mejor evaluadas" subTitle="Phasellus mi urna euismod">
          <MoviesCarousel
            movies={
              topMovies.data
                ? normalizeMoviesResponse(topMovies.data.data.results)
                : []
            }
            loading={topMovies.isLoading}
          />
        </MovieList>

        <MovieList title="Próximos estrenos" subTitle="Morbi ac turpis lacus">
          <MoviesCarousel
            movies={
              comingMovies.data
                ? normalizeMoviesResponse(comingMovies.data.data.results)
                : []
            }
            loading={comingMovies.isLoading}
          />
        </MovieList>
      </SinglePageLayout>
    </>
  );
}

export default Home;
