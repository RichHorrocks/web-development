const express =  require('express');
const bodyParser = require('body-parser');
const request = require('request');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/subscribe', (req, res) => {
  if (
    req.body.captcha === undefined ||
    req.body.captcha === '' ||
    req.body.captcha == null
  ) {
    return res.json({"success": false, "msg": "Please select captcha"});
  }

  // Secret key.
  const secretKey = '6LcWLTYUAAAAADDNqlsJCsVhmYmbho-2H55w-PXY';

  // Verify URL.
  const verifyUrl = `https://google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${req.body.captcha}&remoteip=${req.connection.remoteAddress}`;

  // Make request to verify url.
  request(verifyUrl, (err, resonse, body) => {
    body = JSON.parse(body);
    console.log(body);

    if (body.success !== undefined && !body.success) {
      return res.json({"success": false, "msg": "Failed capture verification"});
    } else {
      return res.json({"success": true, "msg": "Capture passed"});
    }
  });
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
