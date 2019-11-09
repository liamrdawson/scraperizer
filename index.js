import {getHtml, getTwitterFollowers, getInstagramFollowers} from './lib/scraper';

async function startScrape() {
    const html  = await getHtml(`https://twitter.com/LiamRDawson`);
    const twCount = await getTwitterFollowers(html);
    console.log(`You have ${twCount} followers on Twitter.`); 
    const instaCount = await getInstagramFollowers();
    console.log(`You have ${instaCount} followers on Instagram.`);
    
}

startScrape();