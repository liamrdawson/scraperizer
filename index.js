import express from 'express';
import db from './lib/db';
import {getTwitterFollowers, getInstagramFollowers} from './lib/scraper';

const app = express();

console.log(db);

app.get('/scrape', async (req, res, next) => {
    console.log(`Scraping!`);
    const [instaCount, twitCount] = await Promise.all([
        getInstagramFollowers(), 
        getTwitterFollowers()
    ]);
    console.log(instaCount, twitCount);
    res.json({instaCount, twitCount});

    db.get('twitter').push(
        {
            date: Date.now(),
            count: twitCount
        }
    ).write();

    db.get('instagram').push(
        {
            date: Date.now(),
            count: instaCount
        }
    ).write();
});

app.listen(8652, () => console.log(`example app running on port 8652`));