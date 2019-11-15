import express from 'express';
import db from './lib/db';
import { getInstagramCount, getTwitterCount } from './lib/scraper';
import './lib/cron';

// Set up the routing.
const app = express();

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

app.listen(2093, () => console.log('Running on port 2093'));
