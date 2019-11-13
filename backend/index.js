import express from 'express';
import db from './lib/db';
import cors from 'cors';
import './lib/cron';
import {uniqueCount} from './lib/utils';
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
    // Get the scrape data
    const {twitter, instagram} = db.value();
    // Filter for only unique values
    const uniqueTwitter = twitter.reduce((accumulator, scrape) => {
        // Check if this scrape is already in accumulator
        if (!accumulator.find(element => element.count === scrape.count)) {
            return [...accumulator, scrape];
        }
        return accumulator;
    }, []);
    // Respond with JSON
    res.json({uniqueTwitter, twitter, instagram});
});

app.listen(8652, () => console.log(`example app running on port http://localhost:8652`));