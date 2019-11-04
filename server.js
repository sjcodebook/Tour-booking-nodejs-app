/* eslint-disable no-console */
require('dotenv').config();
const mongoose = require('mongoose');
const app = require('./app');

const DB = process.env.DATABASE;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  })

  .then(() => console.log('MongoDB connected'))

  .catch(err => console.log(err));

// Server Started
const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(process.env.NODE_ENV);
  console.log(`Server started at ${port}`);
});

process.on('unhandledRejection', err => {
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
