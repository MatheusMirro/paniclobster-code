const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },

  userEmail: {
    type: String,
    required: true,
  },

  userDate: {
    type: String,
    required: true,
  },

  userState: {
    type: String,
    required: true,
  },

  userCity: {
    type: String,
    required: true,
  },
});

const Users = mongoose.model('Users', UserSchema);
module.exports = Users;