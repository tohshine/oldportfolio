const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../../model/User');
const config = require('config');
const authMiddleware = require('../../middleware/getAuthID');

//?route          /api/admin/auth
//?desc           load admin user
//?access         private

router.get('/', authMiddleware, async (req, res) => {
  try {
    let user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ msg: 'user not found' });
    }
    return res.json(user);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ msg: 'server error' });
  }
});

//?route          /api/admin/auth
//?desc           login in admin
//?access         public

router.post(
  '/',
  [
    check('email', 'email feild cannot be empty')
      .not()
      .isEmpty(),
    check('password', 'password feild cannot be empty')
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ msg: error.array() });
    }
    try {
      const { email, password } = req.body;
      //?check for email and password correct
      let user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ msg: 'incorrect email or password' });
      }
      //?compare password
      let compare = await bcrypt.compare(password, user.password);
      if (!compare) {
        return res.status(400).json({ msg: 'incorrect email or password' });
      }
      //create payload
      const payload = {
        user: { id: user._id }
      };
      jwt.sign(
        payload,
        config.get('jwtSecret'),
        {
          expiresIn: '10h'
        },
        (err, token) => {
          if (err) throw error;
          res.json({ token });
        }
      );
    } catch (error) {
      console.log(error.message);
      return res.status('500').json({ msg: 'internal server error' });
    }
  }
);

module.exports = router;
