var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/movies',
  { useNewUrlParser: true }
);
mongoose.set("useCreateIndex", true);

var db = mongoose.connection;

db.on('connected', function () {
  console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});