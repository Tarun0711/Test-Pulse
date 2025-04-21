import React, { useEffect, useRef, useState } from 'react';
import { Outlet } from 'react-router-dom';
import lottie from 'lottie-web';

function AuthTemplate() {
  const animationContainerRef = useRef(null);
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch('https://lottie.host/b404c700-2804-44c4-940f-59c5ac744dd9/Qhy7XCFlWz.json')
      .then(response => response.json())
      .then(data => setAnimationData(data));
  }, []);

  useEffect(() => {
    if (animationData) {
      const animation = lottie.loadAnimation({
        container: animationContainerRef.current,
        animationData: animationData,
        renderer: 'svg',
        loop: false,
        autoplay: true,
      });
      return () => {
        animation.destroy();
      };
    }
  }, [animationData]);

  return (
    <div className='h-screen flex  items-center justify-center bg-white'>
      <div className=' w-[80%] md:flex-row flex-col shadow-lg rounded-lg flex items-center  bg-richblue-5'>
        <div className='w-1/2'>
          <div ref={animationContainerRef} />
        </div>
        <div className='md:w-1/2 bg-white'>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AuthTemplate;