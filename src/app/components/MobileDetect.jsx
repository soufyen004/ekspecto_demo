'use client';

import { useEffect, useState } from 'react';

export default function MobileDetect() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;
      const isMobileDevice = /android|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent.toLowerCase());

      if (isMobileDevice) {
        document.body.style.display = 'none'; // Hide body
        setIsMobile(true);
      } else {
        document.body.style.display = ''; // Show body
      }
    };

    checkMobile();
  }, []);

  if (!isMobile) return null;

  return (
    <></>
  );
}
