const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcrypt');
const keys = require('../../config/keys');

const userSchema = new Schema({
  username: String,
  password: String,
  firstName: String,
  lastName: String
});

userSchema.methods.generateHash = password => {
  return bcrypt.hash(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = (password, actualPassword) => {
  return bcrypt.compareSync(password, actualPassword);
};

const User = mongoose.model('user', userSchema);

const { initialDbUserLogin, initialDbUserPassword } = keys;

User.findOne({ username: initialDbUserLogin }, async (err, user) => {
  if (!user) {
    const initial_user = new User({ username: initialDbUserLogin });
    initial_user.password = await initial_user.generateHash(
      initialDbUserPassword
    );
    initial_user.save();
  }
});
