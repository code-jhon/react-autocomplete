import React, { useState } from 'react';
import { Autocomplete } from './components';
import useMovieAPI from './services/hooks/useMovieAPI';
import './App.scss';

function App() {
  const [input, setInput] = React.useState<string>('');
  const [filteredOptions, setFilteredOptions] = React.useState<string[]>([]);
  const { movies, isLoading, isError } = useMovieAPI(input);
  const options = movies.map(movie => movie.title);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.currentTarget.value;
    const filteredOptions = options.filter(
      option => option.toLowerCase().indexOf(input.toLowerCase()) > -1
    );
    setInput(input);
    setFilteredOptions(filteredOptions);
  };

  return (
    <>
      <input onChange={handleChange} value={input} placeholder='Type your search here...' />
      <Autocomplete options={filteredOptions} input={input} />
    </>
  )
}

export default App
