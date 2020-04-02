/**
 * This is the config file. That's all I can really say here.
 *
 * @author Daniel DiVenere
 * @since  4/1/20
 */


require('dotenv').config();

module.exports = {
  TOKEN: process.env.TOKEN,
  userId: process.env.USERID,
  URL: process.env.URL,
  DELAY: 1000 * 30,
  whenDelete: 50,
};
