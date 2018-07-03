/*
*
* *** Server Setup ***
*
* Created by Daniel Toro <d.toro@outlook.com>
*
*/

// Import App file
import app from './app';

// Import Config file
import config from './config';

// Import the Database config
import './database';

// Starting the Server
app.listen(config.PORT, err => {
  if (!err) {
    console.log(`
      Yep, it's working! 🍺🍺🍺
      ------------
      Server running on port: ${config.PORT}
      ------------
      Env: ${process.env.NODE_ENV}`);
  } else {
    console.log(`
      Cannot run! 😱
      ---
      Error: ${err}`);
  }
});
