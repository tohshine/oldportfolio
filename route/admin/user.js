const express = require('express');
const { check, validationResult } = require('express-validator');
const router = express.Router();
const User = require('../../model/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('config');

//?route          /api/admin/user
//?desc           admin registeration
//?access         public

router.post(
  '/',
  [
    check('email', 'email cannot be empty')
      .not()
      .isEmpty(),
    check('email', 'bad email format').isEmail(),
    check('password', 'password cannot be empty')
      .not()
      .isEmpty(),
    check('password', 'password should be atleast 6 letters').isLength({
      min: 6
    })
  ],
  async (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ msg: error.array() });
    }

    const { email, password } = req.body;
    try {
      //?check for email exist
      let user = await User.findOne({ email });
      if (user) {
        return res.status(400).json({ msg: 'user already exist' });
      }
      //?populate input body to model and save
      user = new User({
        email,
        password
      });
      //?hash password before saving to database
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
      //?save
      await user.save();

      //?generate jwt token
      const payload = {
        user: {
          id: user._id
        }
      };
      jwt.sign(
        payload,
        config.get('jwtSecret'),
        {
          expiresIn: '10h'
        },
        (err, token) => {
          if (err) throw error;
          return res.json({ token });
        }
      );
    } catch (error) {
      console.log(error.message);
      return res.status(500).json({ msg: 'server down : Try Again later' });
    }
  }
);

module.exports = router;
