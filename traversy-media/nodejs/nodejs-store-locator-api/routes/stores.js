const express = require('express');
const { getStores } = require('../controllers/stores');

const router = express.Router();

router.route('/').get(getStores);

module.exports = router;
