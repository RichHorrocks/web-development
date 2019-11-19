import express from 'express';
import cors from 'cors';
import db from './lib/db';
import { getInstagramCount, getTwitterCount } from './lib/scraper';
import './lib/cron';
import uniqueCount from './lib/utils';
import aggregate from './lib/aggregate';

// Set up the routing.
const app = express();
app.use(cors());

app.get('/scrape', async (req, res, next) => {
  console.log('Scraping');
  const [iCount, tCount] = await Promise.all([
    getInstagramCount(),
    getTwitterCount()
  ]);

  console.log(
    `You have ${tCount} Twitter followers and ${iCount} Instagram followers`
  );

  res.json({ iCount, tCount });
});

app.get('/data', async (req, res, next) => {
  // Get the scraped data.
  const { twitter, instagram } = db.value();

  // Filter for only unique values.
  const uniqueTwitter = uniqueCount(twitter);
  const uniqueInstagram = uniqueCount(instagram);

  // Respond with JSON.
  res.json({ twitter: uniqueTwitter, instagram: uniqueInstagram });
});

app.get('/aggregate', async (req, res, next) => {
  // Get the scraped data.
  const { twitter, instagram } = db.value();

  // Filter for only unique values.
  const uniqueTwitter = uniqueCount(twitter);
  const uniqueInstagram = uniqueCount(instagram);

  // Aggregate these values.
  const aggTwitter = aggregate(twitter);

  // Respond with JSON.
  res.json({ twitter: aggTwitter });
});

app.listen(2093, () => console.log('Running on port 2093'));
