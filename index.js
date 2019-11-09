import {getHtml, getTwitterFollowers, getInstagramFollowers} from './lib/scraper';

async function startScrape() {
    const twCount = await getTwitterFollowers();
    const instaCount = await getInstagramFollowers();
    console.log(`You have ${instaCount} followers on Instagram and ${twCount} followers on Twitter.`);
    
}

startScrape();