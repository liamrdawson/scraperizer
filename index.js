import {getHtml, getTwitterFollowers} from './lib/scraper';

async function startScrape() {
    const html  = await getHtml(`https://twitter.com/LiamRDawson`);
    const twCount = await getTwitterFollowers(html);
    console.log(`You have ${twCount} followers on Twitter.`); 
}

startScrape();