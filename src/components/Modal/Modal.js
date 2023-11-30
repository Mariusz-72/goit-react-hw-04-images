import React, { useEffect, useCallback } from 'react';

const Modal = ({ imageUrl, alt, onClose }) => {
  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.key === 'Escape') {
        handleClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleClose]);

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal">
        <img src={imageUrl} alt={alt} className="modal-image" />
      </div>
    </div>
  );
};

export default Modal;
