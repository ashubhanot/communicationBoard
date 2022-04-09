const mongoose = require('mongoose');

//remember to require require('./config/database'); in the server.js, under morgan

mongoose.connect(process.env.DATABASE_URL, {   //does this need to be adjusted??
  useNewUrlParser: true,
//   useCreateIndex: true,
  useUnifiedTopology: true
});

// shortcut to mongoose.connection object
const db = mongoose.connection;

db.on('connected', function () {
  console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});