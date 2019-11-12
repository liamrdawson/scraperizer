import {useContext} from 'react';
import {ScraperContext} from '../components/ScraperContext';

export default function Data() {
    const scrapedData = useContext(ScraperContext);
    console.log(scrapedData);
    return(
        <div>
            <h2>Your data:</h2>
        </div>
    );
}