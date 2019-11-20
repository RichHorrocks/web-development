const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');

const writeStream = fs.createWriteStream('post.csv');

// Write headers.
writeStream.write(`Title,Link,Date \n`);

request('https://en.blog.wordpress.com/', (err, res, html) => {
  if (!err && res.statusCode == 200) {
    // Use the $ to allow us to mimic JQuery syntax.
    const $ = cheerio.load(html);

    $('.has-postthumbnail').each((index, element) => {
      const title = $(element)
        .find('h2')
        .text();
      const link = $(element)
        .find('a')
        .attr('href');
      const date = $(element)
        .find('.date')
        .text()
        .replace(/,/, '');

      // Write row to the CSV.
      writeStream.write(`${title}, ${link}, ${date} \n`);
    });

    console.log('Scraping done!');
  }
});
