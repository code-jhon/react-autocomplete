import React from 'react';
import './Autocomplete.scss';
import { AutocompleteProps } from '../../utils/interfaces';

const Autocomplete: React.FC<AutocompleteProps> = ({ options, input }) => {

  return (
    <div className='autocomplete'>
      {input && options.length > 0 && (
        <div className='autocomplete__options'>
          {
            options.map((option, i) => (
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