import { useEffect } from 'react';

const HttpsRedirect = () => {
  useEffect(() => {
    // Only run in production environment
    if (process.env.NODE_ENV === 'production') {
      if (
        typeof window !== 'undefined' && 
        window.location.protocol === 'http:' &&
        !window.location.hostname.includes('localhost')
      ) {
        window.location.href = window.location.href.replace(
          'http:', 'https:'
        );
      }
    }
  }, []);

  return null;
};

export default HttpsRedirect;