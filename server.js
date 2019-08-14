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
  // eslint-disable-next-line no-console
  .then(() => console.log('MongoDB connected'));

// Server Started
const port = process.env.PORT || 3000;
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server started at ${port}`);
});
