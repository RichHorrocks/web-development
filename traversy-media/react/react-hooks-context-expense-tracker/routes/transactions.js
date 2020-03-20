const express = require('express');
const router = express.Router();
const {
  getTransactions,
  addTransactions,
  deleteTransactions
} = require('../controllers/transactions');

router
  .route('/')
  .get(getTransactions)
  .post(addTransactions)
  .delete(deleteTransactions);

module.exports = router;
