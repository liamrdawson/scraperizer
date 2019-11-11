import express from 'express';
import {getTwitterFollowers, getInstagramFollowers} from './lib/scraper';

const app = express();

app.get('/scrape', async (req, res, next) => {
    console.log(`Scraping!`);
    const [instaCount, twitCount] = await Promise.all([
        getInstagramFollowers(), 
        getTwitterFollowers()
    ]);
    console.log(instaCount, twitCount);
    res.json({instaCount, twitCount})
});

app.listen(8652, () => console.log(`example app running on port 8652`));