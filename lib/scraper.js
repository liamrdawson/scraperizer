import axios from 'axios';

export async function getHtml(url) {
    const {data} = await axios.get(url);
    return data;
}

export async function getTwitterFollowers(html) {

}