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
      <input onChange={handleChange} value={input} placeholder='Type your search here...' />

      {input && filteredOptions.length > 0 && ( 
          <div className='autocomplete__options'>
            {
              filteredOptions.map((option, i) => (
                <div className='option' key={i}>
                  {option}
                </div>
              ))
            }
          </div>
        )        
      }
    </div>
  )
}

export default Autocomplete