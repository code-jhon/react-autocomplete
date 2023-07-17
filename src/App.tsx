import { useState } from 'react';
import { Autocomplete } from './components';
import './App.css';

function App() {
  const options = ['apple', 'banana', 'orange', 'pear', 'pineapple'];

  return (
    <>
      <Autocomplete options={options} />
    </>
  )
}

export default App
