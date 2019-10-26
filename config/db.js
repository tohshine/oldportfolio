const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoDbURI');

const database = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('mongoDB connected');
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};
module.exports = database;
