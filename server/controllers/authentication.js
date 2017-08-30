const User = require('../models/user');
const jwt = require('jwt-simple');
const config = require('../config');

function tokenForUser(user) {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
}

exports.signin = function(req, res, next) {
  //user already authenticated, they just need a token
  res.send({token: tokenForUser(req.user)});
}

exports.signup = function(req, res, next) {
  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    res.status(422).send({error: "Please provide email and password"});
  }

  //does user exist?
  User.findOne({email: email}, function(err, existingUser) {
    if (err) {
      return next(err);
    }
    //yes - return Error
    if (existingUser) {
      return res.status(422).send({error: 'Email is in use'});
    }
    //no - create and save user
    const user = new User({email: email, password: password});

    user.save(function(err) {
      if (err) {
        return next(err);
      }

      res.json({token: tokenForUser(user)});
    });

  });
}
