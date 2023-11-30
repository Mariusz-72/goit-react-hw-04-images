import React, { useState, useEffect } from 'react';

const Searchbar = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = e => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(searchQuery);
  };

  useEffect(() => {
    const handleKeyUp = e => {
      if (e.key === 'Enter') {
        onSubmit(searchQuery);
      }
    };

    document.addEventListener('keyup', handleKeyUp);

    return () => {
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, [onSubmit, searchQuery]);

  return (
    <header className="searchbar">
      <form className="form" onSubmit={handleSubmit}>
        <button type="submit" className="button button-search">
          <span className="button-label">Search</span>
        </button>

        <input
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={searchQuery}
          onChange={handleChange}
        />
      </form>
    </header>
  );
};

export default Searchbar;
