import axios from 'axios';
import cheerio from 'cheerio';

export async function getHtml(url) {
    const {data: html} = await axios.get(url);
    return html;
}

export async function getTwitterFollowers(html) {
    const $ = cheerio.load(html);
    console.log($);
}