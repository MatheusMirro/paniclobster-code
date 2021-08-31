const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

const UsersModel = require('./models/users');

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://newuser:password12345@crud.3oa7z.mongodb.net/paniclobster?retryWrites=true&w=majority', {
  useNewUrlParser: true,
});

app.post('/insert', async (req, res) => {

  const userName = req.body.userName
  const userBirth = req.body.userBirth
  const userEmail = req.body.userEmail
  const userState = req.body.userState
  const userCity = req.body.userCity

  const user = new UsersModel({
    userName: userName,
    userDate: userBirth,
    userEmail: userEmail,
    userState: userState,
    userCity: userCity
  });

  try {
    await user.save();
  } catch (err) {
    console.log(err);
  }
});

app.listen(3001, () => {
  console.log('listening on port 3001')
});