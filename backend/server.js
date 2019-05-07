const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const passport = require('passport');
const PORT = 4000;

// Routes
const userRoutes = require('./routes/user')
const forumRoutes = require('./routes/forum')
const exploreRoutes = require('./routes/explore')
const mapRoutes = require('./routes/map')

// Bodyparser middleware
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
app.use(bodyParser.json());

// Passport middleware
app.use(passport.initialize());
require('./config/passport')(passport);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});

app.use('/users', userRoutes)
app.use('/forums', forumRoutes)
app.use('/explores', exploreRoutes)
app.use('/maps', mapRoutes)
