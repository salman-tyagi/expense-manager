import mongoose, { mongo } from 'mongoose';

import app from './app.js';

const DB =
  process.env.NODE_ENV === 'development'
    ? process.env.DEV_DB
    : process.env.PRO_DB;

(async () => {
  try {
    await mongoose.connect(DB);
    mongoose.set('debug', true);
    console.log('DB connected successfully!');
  } catch (err) {
    console.log(err);
  }
})();

const port = process.env.PORT;

app.listen(port, '127.0.0.1', () => {
  console.log(`Listening on the port ${port} in ${process.env.NODE_ENV}`);
});
