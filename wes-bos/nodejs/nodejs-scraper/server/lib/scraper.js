import axios from 'axios';
import cheerio from 'cheerio';
import db from './db';

async function getHTML(url) {
  const { data: html } = await axios.get('https://twitter.com/wesbos');
  return html;
}

async function getTwitterFollowers(html) {
  // Load up a Cheerio object.
  const $ = cheerio.load(html);
  const span = $('[data-nav="followers"] .ProfileNav-value');

  return span.data('count');
}

export async function getInstagramCount() {
  const { data } = await axios.get(`https://www.instagram.com/wesbos/?__a=1`);

  return data.graphql.user.edge_followed_by.count;
}

export async function getTwitterCount() {
  const html = await getHTML('https://twitter.com/RichJHorrocks');

  return await getTwitterFollowers(html);
}

export async function runCron() {
  const [iCount, tCount] = await Promise.all([
    getInstagramCount(),
    getTwitterCount()
  ]);

  db.get('twitter')
    .push({
      date: Date.now(),
      count: tCount
    })
    .write();
  db.get('instagram')
    .push({
      date: Date.now(),
      count: iCount
    })
    .write();

  console.log('Done writing!');
}
