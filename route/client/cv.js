const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const Post = require('../../model/clientPost');
const User = require('../../model/User');
const profileCV = require('../../model/adminPost');

//?route        POST  /api/client/cv
//?desc           post form for client
//?access         public

router.post(
  '/',
  [
    check('name', 'name field cannot be empty')
      .not()
      .isEmpty(),
    check('email', ' email field cannot be empty')
      .not()
      .isEmpty(),
    check('message', 'message feild cannot be empty')
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ msg: error.array() });
    }
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
      return res.json(post);
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
