import React, { useCallback } from 'react';

const ImageGalleryItem = ({ imageUrl, alt, onClick }) => {
  const handleClick = useCallback(() => {
    onClick(imageUrl);
  }, [imageUrl, onClick]);

  return (
    <div className="image-gallery-item" onClick={handleClick}>
      <img src={imageUrl} alt={alt} className="image" />
    </div>
  );
};

export default ImageGalleryItem;
