const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// const cors = require('cors');
const mongoose = require('mongoose');
const passport = require('passport');
const PORT = 4000;

// Routes
const userRoutes = require('./routes/user')
const forumRoutes = require('./routes/forum')
const exploreRoutes = require('./routes/explore')


// Bodyparser middleware
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
app.use(bodyParser.json());
// app.use(cors());

// Passport middleware
app.use(passport.initialize());
require('./config/passport')(passport);

mongoose.connect('mongodb://127.0.0.1:27017/blueplanet', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});

app.use('/users', userRoutes)
app.use('/forums', forumRoutes)
app.use('/explores', exploreRoutes)
