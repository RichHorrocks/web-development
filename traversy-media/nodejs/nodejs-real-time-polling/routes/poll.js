const express = require('express');
const router = express.Router();
const Pusher = require('pusher');

var pusher = new Pusher({
  appId: '623691',
  key: 'a43e28d45b35d05d7abe',
  secret: 'a37ad9383236c22c5b81',
  cluster: 'eu',
  encrypted: true
});

router.get('/', (req, res) => {
  res.send('POLL');
});

router.post('/', (req, res) => {
  pusher.trigger('os-poll', 'os-vote', {
    points: 1,
    os: req.body.os
  });

  return res.json({ success: true, message: 'Thank you for voting' });
});

module.exports = router;
