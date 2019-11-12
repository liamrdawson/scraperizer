import express from 'express';
import db from './lib/db';
import './lib/cron';
import {getTwitterFollowers, getInstagramFollowers} from './lib/scraper';

const app = express();

console.log(db);

app.get('/scrape', async (req, res, next) => {
    console.log(`Scraping!`);
    const [instaCount, twitCount] = await Promise.all([
        getInstagramFollowers(), 
        getTwitterFollowers()
    ]);
    res.json({instaCount, twitCount});
});

app.listen(8652, () => console.log(`example app running on port 8652`));