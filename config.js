require('dotenv').config();

module.exports = {
  TOKEN: process.env.TOKEN,
  userId: process.env.USERID,
  URL: process.env.URL,
  DELAY: 1000 * 30,
  whenDelete: 50,
};
