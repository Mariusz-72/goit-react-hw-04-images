import React from 'react';

const Modal = ({ imageUrl, alt, onClose }) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal">
        <img src={imageUrl} alt={alt} className="modal-image" />
      </div>
    </div>
  );
};

export default Modal;
