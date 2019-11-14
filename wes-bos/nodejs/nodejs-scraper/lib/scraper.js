import axios from 'axios';
import cheerio from 'cheerio';

export async function getHTML(url) {
  const { data: html } = await axios.get('https://twitter.com/RichJHorrocks');
  return html;
}

export async function getTwitterFollowers(html) {
  // Load up a Cheerio object.
  const $ = cheerio.load(html);
  const span = $('[data-nav="followers"] .ProfileNav-value');

  return span.data('count');
}

export async function getInstagramFollowers(username = 'richhorrocks') {
  const { data } = await axios.get(
    `https://www.instagram.com/${username}/?__a=1`
  );

  return data.graphql.user.edge_followed_by.count;
}
