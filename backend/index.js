import express from 'express';
import cors from 'cors';
import db from './lib/db';
import './lib/cron';
import { uniqueCount } from './lib/utils';
import { getTwitterFollowers, getInstagramFollowers } from './lib/scraper';

const app = express();
app.use(cors());

app.get('/scrape', async (req, res, next) => {
  console.log(`Scraping!`);
  const [instaCount, twitCount] = await Promise.all([
    getInstagramFollowers(),
    getTwitterFollowers(),
  ]);
  res.json({ instaCount, twitCount });
});

app.get('/data', async (req, res, next) => {
  // Get the scrape data
  const { twitter, instagram } = db.value();
  // Filter for only unique values
  const uniqueTwitter = uniqueCount(twitter);
  const uniqueInstagram = uniqueCount(instagram);
  // Respond with JSON
  res.json({ uniqueTwitter, uniqueInstagram, twitter, instagram });
});

app.listen(8652, () =>
  console.log(`example app running on port http://localhost:8652`)
);
