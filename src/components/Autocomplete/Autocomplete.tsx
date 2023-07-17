import React from 'react';
import './Autocomplete.scss';

interface Props {
  options: string[]
}

const Autocomplete: React.FC<Props> = ({ options }) => {
  const [input, setInput] = React.useState<string>('');
  const [filteredOptions, setFilteredOptions] = React.useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.currentTarget.value;
    const filteredOptions = options.filter(
      option => option.toLowerCase().indexOf(input.toLowerCase()) > -1
    );
    setInput(input);
    setFilteredOptions(filteredOptions);
  };

  return (
    <div className='autocomplete'>
      <input onChange={handleChange} value={input} />

      <ul className='autocomplete__options'>
        <li className='autocomplete__options__option'>prueba </li>
      </ul>
    </div>
  )
}

export default Autocomplete