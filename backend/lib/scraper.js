import axios from 'axios';
import cheerio from 'cheerio';
import db from './db';

export async function getHtml(url) {
  const { data: html } = await axios.get(url);
  return html;
}

export async function getTwitterFollowers(username = 'liamrdawson') {
  const html = await getHtml(`https://twitter.com/${username}`);
  const $ = cheerio.load(html);
  const twitCount = $('[href="/LiamRDawson/followers"] .ProfileNav-value').data(
    'count'
  );
  return twitCount;
}

export async function getInstagramFollowers(username = 'liamrdawson') {
  const { data } = await axios.get(
    `https://www.instagram.com/${username}/?__a=1`
  );
  const instaCount = data.graphql.user.edge_followed_by.count;
  return instaCount;
}

export async function runCount() {
  const [instaCount, twitCount] = await Promise.all([
    getInstagramFollowers(),
    getTwitterFollowers(),
  ]);
  db.get('twitter')
    .push({
      date: Date.now(),
      count: twitCount,
    })
    .write();
  db.get('instagram')
    .push({
      date: Date.now(),
      count: instaCount,
    })
    .write();
  console.log(`Data pushed to DB`);
}
