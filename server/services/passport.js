const passport = require('passport');
const Strategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const User = mongoose.model('user');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user, err) => {
    if (err) {
      return done(err);
    }
    done(null, user);
  });
});

passport.use(
  new Strategy((username, password, done) => {
    User.findOne({ username: username }, (err, user) => {
      if (err) return done(err);

      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password, user.password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }

      return done(null, user);
    });
  })
);
