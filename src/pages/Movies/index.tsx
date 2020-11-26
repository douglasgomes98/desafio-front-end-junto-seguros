import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import Menu from '~/components/Menu';
import api from '~/services/api';
import { Container, ContainerMovies } from './styles';
import Card from '~/components/Card';

interface IMovie {
  Title: string;
  Year: number;
  imdbID: string;
  Type: string;
  Poster: string;
}

interface ISearch {
  Search: IMovie[];
}

const Movies: React.FC = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [input, setInput] = useState('');
  const [loadingSearch, setLoadingSearch] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  async function handleSearchMovies() {
    setLoadingSearch(true);
    const response = await api.get<ISearch>(
      `?apikey=f0fc51a6&type=movie&s=${input}`,
    );
    setMovies(response.data.Search);
    setLoadingSearch(false);
    localStorage.setItem('movies', JSON.stringify(response.data.Search));
  }

  function trackScrolling() {
    if (containerRef.current) {
      const { scrollHeight, scrollTop, clientHeight } = containerRef.current;
      const currentScroll = scrollHeight - scrollTop;

      if (currentScroll === clientHeight) {
        // console.log('botton');
      }
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', () => trackScrolling());

    return window.removeEventListener('scroll', () => trackScrolling());
  }, []);

  useEffect(() => {
    const data = localStorage.getItem('movies');
    if (data) {
      setMovies(JSON.parse(data));
    }
  }, []);

  return (
    <Container>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Junto Seguros - Filmes</title>
      </Helmet>
      <Menu />
      <ContainerMovies
        className="container pb-3 pt-3"
        ref={containerRef}
        onScroll={() => trackScrolling()}
      >
        <div className="input-group mb-3">
          <input
            className="form-control"
            type="text"
            placeholder="Pesquise por um filme"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            onKeyPress={(event) =>
              event.key === 'Enter' && handleSearchMovies()
            }
          />
          <div className="input-group-append">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => handleSearchMovies()}
            >
              Pesquisar
            </button>
          </div>
        </div>
        {loadingSearch ? (
          <div className="text-center justify-content-center">
            <div className="spinner-border text-primary" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        ) : (
          <div className="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1">
            {movies.map((movie) => (
              <Card key={movie.imdbID} data={movie} />
            ))}
          </div>
        )}
      </ContainerMovies>
    </Container>
  );
};

export default Movies;
