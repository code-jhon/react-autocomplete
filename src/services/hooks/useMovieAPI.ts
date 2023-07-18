/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useState, useEffect } from 'react';
import { Movie, MovieAPI } from '../../utils/interfaces';

const useMovieAPI = (search: string) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);
      setIsError(false);

      try {
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${search}`);
        const data: MovieAPI = await response.json();
        const filteredData: Movie[] = data.results.map((movie) => ({
          id: movie.id,
          title: movie.title,
        }));
        setMovies(filteredData);
      }
      catch (error) {
        setIsError(true);
      }
      finally {
        setIsLoading(false);
      }
    }
    fetchMovies();
  }, [search]);

  return { movies, isLoading, isError };
}


export default useMovieAPI