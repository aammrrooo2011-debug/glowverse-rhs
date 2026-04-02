
import React from 'react';
import AdPlaceholder from './AdPlaceholder.jsx';

const AdUnit = ({ 
  slot, 
  format = 'auto', 
  responsive = true,
  className = ''
}) => {
  return (
    <AdPlaceholder className={className}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-8997171411497007"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive.toString()}
      />
    </AdPlaceholder>
  );
};

export default AdUnit;
