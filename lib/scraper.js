import axios from 'axios';
import cheerio from 'cheerio';

export async function getHtml(url) {
    const {data: html} = await axios.get(url);
    return html;
}

export async function getTwitterFollowers(html) {
    const $ = cheerio.load(html);
    const span = $('[href="/LiamRDawson/followers"] .ProfileNav-value');
    return span.data('count');
}

export async function getInstagramFollowers() {
    const $ = cheerio.load(html);
    const span = $('[href="/accounts/login/?next=%2Fliamrdawson%2Ffollowers%2F&source=followed_by_list"]');
    return span.data();
}