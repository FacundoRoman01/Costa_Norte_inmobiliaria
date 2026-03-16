import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useScrollToTop = () => {
  // const { pathname } = useLocation();

  // useEffect(() => {
  //   window.scrollTo(0, 0); 
  // }, [pathname]); 

  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll suave
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Aquí se agrega el desplazamiento suave
    });
  }, [pathname]);

  return null;
};

export default useScrollToTop;