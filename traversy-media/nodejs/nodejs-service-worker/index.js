const express = require('express');
const webpush = require('web-push');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Set static path.
app.use(express.static(__dirname + '/client'));

app.use(bodyParser.json());

const publicVapidKey =
  'BIZB7GH65QVhPwZynZDdo0oszxXF52UbJeLLBSoGNdh_eg01jPHkd0XR1f_NTFMRs0GcD9LzwZlFAvt2PrntBJY';
const privateVapidKey = 'eXEWgRRlej_mjpxt0CBRtDOvNRVSSySPZD0a5JJjEqw';

webpush.setVapidDetails(
  'mailto:test@test.com',
  publicVapidKey,
  privateVapidKey
);

// Subscribe route.
app.post('/subscribe', (req, res) => {
  // Get pushSubscription object.
  const subscription = req.body;

  // Send 201 status - resource created.
  res.status(201).json({});

  // Create payload.
  const payload = JSON.stringify({ title: 'Push test' });

  // Pass object into the send notification function.
  webpush
    .sendNotification(subscription, payload)
    .catch(err => console.log(err));
});

const port = 6000;

app.listen(port, () => console.log(`Server started on port ${port}`));
