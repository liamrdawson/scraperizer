import {getHtml, getTwitterFollowers, getInstagramFollowers} from './lib/scraper';

async function startScrape() {
    const html  = await getHtml(`https://twitter.com/LiamRDawson`);
    const twCount = await getTwitterFollowers(html);
    const instaCount = await getInstagramFollowers();
    console.log(`You have ${instaCount} followers on Instagram and ${twCount} followers on Twitter.`);
    
}

startScrape();