import React from 'react';
import './SearchBox.scss';

function SearchBox(props: { placeholder: string; handleChange: any }) {
  return (
    <div className="sticky">
      <input
        className="search"
        type="search"
        placeholder={props.placeholder}
        onChange={props.handleChange}
      />
    </div>
  );
}

export default SearchBox;
