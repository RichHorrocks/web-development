import {
  getHTML,
  getTwitterFollowers,
  getInstagramFollowers
} from './lib/scraper';

async function go() {
  const html = await getHTML('https://twitter.com/RichJHorrocks');
  const twCount = await getTwitterFollowers(html);

  const instaCount = await getInstagramFollowers();

  console.log(
    `You have ${twCount} Twitter followers and ${instaCount} Instagram followers`
  );
}

go();
