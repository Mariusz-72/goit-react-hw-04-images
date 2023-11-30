import React, { useEffect } from 'react';
import { Puff } from 'react-loader-spinner';

const CustomLoader = () => {
  useEffect(() => {
    const bodyOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = bodyOverflow;
    };
  }, []);

  return (
    <div className="loader">
      <Puff type="Puff" color="#00BFFF" height={100} width={100} />
    </div>
  );
};

export default CustomLoader;
