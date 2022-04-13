import { Container, Box } from '@mui/material';
import Hero from '../../components/Hero';
import MovieList from '../../components/MovieList';
import MoviesCarousel from '../../components/MoviesCarousel';

import { useMovies } from '../../hooks/movies';

import { normalizeMoviesResponse } from '../../helpers/normalizeResponseMovies';

function Home() {
  const [popularMovies, topMovies, comingMovies] = useMovies();

  return (
    <>
      <Hero />
      <Container>
        <Box sx={{ py: 12 }}>
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

          <MovieList
            title="Mejor evaluadas"
            subTitle="Phasellus mi urna euismod"
          >
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
        </Box>
      </Container>
    </>
  );
}

export default Home;
