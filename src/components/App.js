import React, { useState, useEffect } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=39862890-65ac2b6f59b7905db114a6f69&image_type=photo&orientation=horizontal&per_page=12`
        );
        const data = await response.json();
        setImages(prevImages => [...prevImages, ...data.hits]);
      } catch (error) {
        console.error('Error fetching images:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [searchQuery, page]);

  const handleSearchSubmit = query => {
    setSearchQuery(query);
    setPage(1);
    setImages([]);
  };

  const loadMoreImages = () => {
    setPage(prevPage => prevPage + 1);
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.removeEventListener('keydown', handleKeyDown);
  };

  const handleKeyDown = event => {
    if (event.key === 'Escape') {
      closeModal();
    }
  };

  const openModal = imageUrl => {
    setSelectedImage(imageUrl);
    document.addEventListener('keydown', handleKeyDown);
  };

  return (
    <div>
      <Searchbar onSubmit={handleSearchSubmit} />
      <ImageGallery>
        {images.map(image => (
          <div
            key={image.id}
            className="image-gallery-item"
            onClick={() => openModal(image.largeImageURL)}
          >
            <img src={image.webformatURL} alt={image.tags} className="image" />
          </div>
        ))}
      </ImageGallery>
      {isLoading && <Loader />}
      <Button
        onClick={loadMoreImages}
        isVisible={images.length > 0 && !isLoading}
      />
      {selectedImage && (
        <Modal
          imageUrl={selectedImage}
          alt="Selected Image"
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default App;
