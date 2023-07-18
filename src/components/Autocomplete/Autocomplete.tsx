import React from 'react';
import './Autocomplete.scss';
import { AutocompleteProps } from '../../utils/interfaces';

const Autocomplete: React.FC<AutocompleteProps> = ({ options, input }) => {
  return (
    <div className='autocomplete'>
      {input && options.length > 0 && (
        <div className='autocomplete__options'>
          {options.map((option, i) => {
            const regex = new RegExp(input, 'gi');
            const textParts = option.split(regex);
            const highlightedText = option.match(regex);

            return (
              <div className='option' key={i}>
                {textParts.map((part, index) =>
                  index < textParts.length - 1 ? (
                    <React.Fragment key={index}>
                      {part}
                      <span className='highlight'>{highlightedText}</span>
                    </React.Fragment>
                  ) : (
                    part
                  )
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Autocomplete;
