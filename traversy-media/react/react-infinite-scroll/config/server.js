module.exports = {
  APPLICATION_ID:
    process.env.APPLICATION_ID ||
    'b89f6deada3b3f5ad2387be693ac3458a590923cc5fd726093ec3953c6ae19ed',
  SECRET:
    process.env.SECRET ||
    'a129dd0379be884ed2c522dfd2519af337d330a01cd6f068956bcb8413b3da2e',
  CALLBACK_URL: process.env.CALLBACK_URL || 'http://localhost:3000'
};
