const request = require('request');
const cheerio = require('cheerio');

request('https://en.blog.wordpress.com/', (err, res, html) => {
  if (!err && res.statusCode == 200) {
    // Use the $ to allow us to mimic JQuery syntax.
    const $ = cheerio.load(html);

    const siteHeading = $('#blog-title');
    console.log(siteHeading.html());
    console.log(siteHeading.text());
  }
});
