const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const key = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((user, done) => {
    User.findById(id).then(user => {
        done(null, user);
    })
});

passport.use(
    new GoogleStrategy(
        {
            clientID: key.login.google.ClientID,
            clientSecret: key.login.google.ClientSecret,
            callbackURL: '/auth/google/callback'
        },
        (accessToken, refreshToken, profile, done) => {
            User.findOne({ googleId: profile.id})
                .then((existingUser) => {
                    if(existingUser){
                         done(null, existingUser);
                    } else {
                        new User({
                            googleId: profile.id
                        }).save().then(user => done(null, user));
                    }
            })           
        }
    )
);