/*
*
* *** API File ***
*
* Created by Daniel Toro <d.toro@outlook.com>
*
*/

// Import Routes files
import blogRoutes from './routes/posts';

export default app => {
  app.use('/', blogRoutes);
};
