import {getHtml} from './lib/scraper';

async function startScrape() {
    console.log(await getHtml(`https://twitter.com/LiamRDawson`));
}

startScrape();