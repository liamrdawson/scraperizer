import axios from 'axios';
import cheerio from 'cheerio';

export async function getHtml(url) {
    const {data: html} = await axios.get(url);
    return html;
}

export async function getTwitterFollowers(html) {
    const $ = cheerio.load(html);
    const twitCount = $('[href="/LiamRDawson/followers"] .ProfileNav-value').data('count');
    return twitCount;
}

export async function getInstagramFollowers(username = 'liam_r_dawson') {
    const {data} = await axios.get(`https://www.instagram.com/${username}/?__a=1`);
    const instaCount = data.graphql.user.edge_followed_by.count;
    return instaCount;
}