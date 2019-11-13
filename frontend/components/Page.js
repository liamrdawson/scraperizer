import {useEffect, useState} from 'react';
import {ScraperProvider} from './ScraperContext';

function useScrapes() {
    // Initial state in custom hook.
    const [scrapes, setScrapes] = useState({
        twitter: [],
        instagram: [],
    });

    // Fetch function
    async function fetchScrapes () {
        const res = await fetch('http://localhost:8652/data');
        const data = await res.json();
        setScrapes(data);
    }

    // didMount/didUpdate 
    useEffect(() => {
        fetchScrapes();
    }, []);

    return {scrapes, fetchScrapes};
}

export default function Page({children}) {
    const hookInfo = useScrapes();
    return(
        <ScraperProvider value={hookInfo}>
            <div className="page">
                {children}
            </div>
        </ScraperProvider>
    );  
}