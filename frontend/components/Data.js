import {useContext} from 'react';
import {ScraperContext} from './ScraperContext';
import {formatDistanceToNow} from 'date-fns';

export default function Data() {
    const scrapedData = useContext(ScraperContext);
    return(
        <div>
            <h2>Your data:</h2>
            <ul>
                {scrapedData.twitter.map(scrape => 
                    <li key={scrape.date}>
                        {`${scrape.count} - ${formatDistanceToNow(new Date(scrape.date))} ago`}
                    </li>
                )}
            </ul>
            {scrapedData.twitter.length}
        </div>
    );
}