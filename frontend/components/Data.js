import {useContext} from 'react';
import {ScraperContext} from './ScraperContext';
import Table from './Table';
import Chart from './Chart';

export default function Data() {
    const scrapedData = useContext(ScraperContext);
    return(
        <div>
            <Chart scrapes={scrapedData.twitter} />
            <Chart scrapes={scrapedData.instagram} />
            <h2>Twitter:</h2>
            <Table scrapes={scrapedData.twitter}/>
            <h2>Instagram:</h2>
            <Table scrapes={scrapedData.instagram}/>
        </div>
    );
}