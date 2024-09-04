import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// this necessary to return to the top of the page when changing between pages

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

export default ScrollToTop;
