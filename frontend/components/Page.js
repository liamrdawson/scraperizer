import {useEffect, useState} from 'react';
import {ScraperProvider} from './ScraperContext';

function useScrapes() {
    const [scrapes, setScrapes] = useState({
        twitter: [],
        instagram: [],
    });
    useEffect( function() {
        (async ()=>{
            console.log('Updating');
            const res = await fetch('http://localhost:8652/data');
            const data = await res.json();
            console.log(data);
            setScrapes(data);
        })();
    }, []);
    return scrapes;
}

export default function Page({children}) {
    const scrapes = useScrapes();
    return(
        <ScraperProvider value={scrapes}>
            <div className="page">
                {children}
            </div>
        </ScraperProvider>
    );  
}