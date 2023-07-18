/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useState, useEffect } from 'react';
import { Movie, MovieAPI } from '../../utils/interfaces';

const useMovieAPI = (search: string) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  //const VITE_API_KEY = import.meta.env.VITE_API_KEY;
  const VITE_API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NWY0M2QxMzA0YWM4ODEzZGNlN2U2YTI3MTlmZjBkNiIsInN1YiI6IjU4Mzc1ZDg0YzNhMzY4MzZhZTAxNjY5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nClHeasTxKIF-IODetTQ9p2yNdqH0CAunWSjIA_-r3s`
      }
    };
    const fetchMovies = async () => {
      setIsLoading(true);
      setIsError(false);

      try {
        const response = await fetch(`${VITE_API_URL}/search/movie?query=${search}`, options);
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