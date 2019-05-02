const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const keys = require('./keys');
const opts = {};

const db = require('monk')('mikestd:mikestd1q2w3e4r@mars.mikelab.net:27017/blueplanet_project',{ authSource:'admin' })
const collection = db.get('users')

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;

module.exports = passport => {
    passport.use(
        new JwtStrategy(opts, (jwt_payload, done) => {
            collection
                .find({ '_id': jwt_payload.id })
                .then(user => {
                    if (user) {
                        return done(null, user);
                    }
                    return done(null, false);
                })
                .catch(err => console.log(err))
        })
    );
};