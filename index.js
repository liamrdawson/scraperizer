import {getHtml, getTwitterFollowers, getInstagramFollowers} from './lib/scraper';

async function startScrape(twitUser = 'LiamRDawson', instaUser = 'liam_r_dawson') {
    const twCount = await getTwitterFollowers(twitUser);
    const instaCount = await getInstagramFollowers(instaUser);
    console.log(`You have ${instaCount} followers on Instagram and ${twCount} followers on Twitter.`);
    
}

startScrape();