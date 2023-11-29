import React from 'react';

const Button = ({ onClick, isVisible }) => (
  <button
    className="button-load-more"
    onClick={onClick}
    style={{ display: isVisible ? 'block' : 'none' }}
  >
    Load More
  </button>
);

export default Button;
