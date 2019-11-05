const express = require('express');
const nodeMailer = require('nodemailer');
const nodemailertransport = require('nodemailer-sendgrid-transport');
const crypto = require('crypto');
const User = require('../../model/User');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const bcryptJS = require('bcrypt');

//?init send grid mailer here
const transport = nodeMailer.createTransport(
  nodemailertransport({
    auth: {
      api_key:
        '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'
    }
  })
);

router.post('/reset-password', (req, res) => {
  console.log(req.body);

  //?create crypto token
  const { email } = req.body;
  crypto.randomBytes(32, async (err, buffer) => {
    if (err) return res.status(400).json({ msg: 'error reset your password' });

    const token = buffer.toString('hex');

    try {
      if (!email) return;
      let user = await User.findOne({ email: email });
      if (!user) {
        return res
          .status(401)
          .json({ msg: 'The email entered does not match any credentials!' });
      }
      //?updating user with his token and its expiry date
      user.token = token;
      user.tokenExpiry = Date.now() + 3600000;
      await user.save();
      //?mailing start
      transport.sendMail({
        to: email,
        from: 'TohshineDev@devConcept.com',
        subject: 'Link to Reset Password',
        html:
          `You are  receiving this because you (or someone else) have requested the reset of your password for your account.\n\n` +
          `Please click on the following link, or paste this into your browser to complete the process within one hour of receiving it:\n\n` +
          `<p>password reset <a href="http://localhost:3000/reset/${token}">link</a></p>\n\n` +
          `If you did not request this, please ignore this email and your password will remain unchanged.\n`
      });

      return res.json({ msg: 'email link sent' });
    } catch (error) {
      console.log(error.message);
      return res.status(500).json({ msg: 'server down' });
    }
  });
});

//?verifying token and ExpiryTime
router.get('/reset/:token', async (req, res) => {
  const token = req.params.token;
  try {
    let user = await User.findOne({
      token: token,
      tokenExpiry: { $gt: Date.now() }
    });

    if (!user) return;

    return res.json({ msg: token });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ msg: 'server down' });
  }
});

//?reseting password credentials
router.post(
  '/reset',
  [
    check('password', 'password must be minimum of 6 characters'),
    check('password', 'password feild cannot be empty')
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    const { password, token } = req.body;
    const error = validationResult(req);
    if (!error.isEmpty()) return res.status(400).json({ msg: error.array() });
    try {
      //?chk for token validity again

      let user = await User.findOne({
        token: token,
        tokenExpiry: { $gt: Date.now() }
      });
      console.log(user);

      if (!user)
        return res.status(400).json({
          msg: 'reset time expired: Try Again'
        });

      user.password = await bcryptJS.hash(password, 10);
      user.token = undefined;
      user.tokenExpiry = undefined;
      await user.save();

      return res.send('password has been reset: Login to proceed');
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ msg: 'server down' });
    }
  }
);

module.exports = router;
