/*
*
* *** Database Config File ***
*
* Created by Daniel Toro <d.toro@outlook.com>
*
*/

// NPM Dependencies
import mongoose from 'mongoose';

// Import Config file
import config from './config';

// Remove the warning with promise
mongoose.Promise = global.Promise;

// Connect the DATABASE with the url provide
try {
  mongoose.connect(config.MONGO_URL);
} catch (err) {
  mongoose.createConnection(config.MONGO_URL);
}

mongoose.connection
  .once('open', () =>
    console.log(
      `
      MongoDB is Running 🍃🍃🍃
      `
    ),
  )
  .on('error', error =>
    console.log(
      `
      Cannot run database! 😱
      ---
      Error: ${error}
      `
    ),
  );
