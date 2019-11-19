import axios from 'axios';
import cheerio from 'cheerio';
import db from './db';

async function getHTML(url) {
  const { data: html } = await axios.get(url);
  return html;
}

async function getTwitterFollowers(html) {
  // Load up a Cheerio object.
  const $ = cheerio.load(html);
  const span = $('[data-nav="followers"] .ProfileNav-value');
  return span.data('count');
}

export async function getInstagramFollowers(html) {
  // load up Cheerio
  const $ = cheerio.load(html);
  // const dataInString = $('script[type="application/ld+json"]').html();
  // const pageObject = JSON.parse(dataInString);
  // console.log($);
  // // return parseInt(
  //   pageObject.mainEntityofPage.interactionStatistic.userInteractionCount
  //);
}

export async function getInstagramCount() {
  const html = await getHTML('https://instagram.com/wesbos');
  return await getInstagramFollowers(html);
}

export async function getTwitterCount() {
  const html = await getHTML('https://twitter.com/wesbo');
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
