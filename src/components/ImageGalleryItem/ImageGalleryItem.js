import React from 'react';

const ImageGalleryItem = ({ imageUrl, alt, onClick }) => {
  const handleClick = () => {
    onClick(imageUrl);
  };

  return (
    <div className="image-gallery-item" onClick={handleClick}>
      <img src={imageUrl} alt={alt} className="image" />
    </div>
  );
};

export default ImageGalleryItem;
