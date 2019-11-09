import {getHtml, getTwitterFollowers} from './lib/scraper';

async function startScrape() {
    getTwitterFollowers(await getHtml(`https://twitter.com/LiamRDawson`));
}

startScrape();