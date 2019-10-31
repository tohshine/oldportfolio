const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const Post = require('../../model/clientPost');
const User = require('../../model/User');
const profileCV = require('../../model/adminPost');

//?route        POST  /api/client/cv
//?desc           post message from client
//?access         public

router.post(
  '/',
  [
    check('name', 'name feild empty')
      .not()
      .isEmpty(),
    check('email', 'email feild empty')
      .not()
      .isEmpty(),
    check('email', 'Bad email format').isEmail(),
    check('message', 'message feild empty')
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) return res.status(401).json( error.array() );
    try {
      const user = await User.findOne().sort({ date: 1 });
      if (!user) throw error;

      const { name, email, message } = req.body;
      let post = new Post({
        name,
        email,
        message,
        user: user._id
      });
      await post.save();
      return res.send('Message sent: Thanks for contacting me');
    } catch (error) {
      console.log(error.message);
      return res.status(500).json({ msg: 'server error' });
    }
  }
);
//?route        GET  /api/client/cv
//?desc          display profile cv
//?access         public
router.get('/', async (req, res) => {
  try {
    let cv = await profileCV
      .findOne()
      .sort({ createdAT: 1 } || { updatedAT: 1 });
    return res.json(cv);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ msg: 'server error' });
  }
});
module.exports = router;
