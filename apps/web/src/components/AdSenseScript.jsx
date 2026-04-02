
import React from 'react';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';

const AdSenseScript = () => {
  useEffect(() => {
    // Push ads after script loads
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error('AdSense error:', e);
    }
  }, []);

  return (
    <Helmet>
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8997171411497007"
        crossOrigin="anonymous"
      />
    </Helmet>
  );
};

export default AdSenseScript;
