import express from 'express';
import db from './lib/db';
import cors from 'cors';
import './lib/cron';
import {getTwitterFollowers, getInstagramFollowers} from './lib/scraper';

const app = express();
app.use(cors());

app.get('/scrape', async (req, res, next) => {
    console.log(`Scraping!`);
    const [instaCount, twitCount] = await Promise.all([
        getInstagramFollowers(), 
        getTwitterFollowers()
    ]);
    res.json({instaCount, twitCount});
});

app.get('/data', async (req, res, next) => {
    const twitter = db.value();
    res.json(twitter);
});

app.listen(8652, () => console.log(`example app running on port http://localhost:8652`));