
import React from 'react';

const AdPlaceholder = ({ children, className = '' }) => {
  return (
    <div className={`ad-container ${className}`}>
      {children}
    </div>
  );
};

export default AdPlaceholder;
