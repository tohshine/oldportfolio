const express = require('express');
const router = express.Router();
const authMiddleware = require('../../middleware/getAuthID');
const Posts = require('../../model/clientPost');
const User = require('../../model/User');
const { check, validationResult } = require('express-validator');
const AdminPost = require('../../model/adminPost');

//?route        GET  /api/admin/generate
//?desc           get all post sent by client
//?access         private

router.get('/messages', authMiddleware, async (req, res) => {
  try {
    
    let posts = await Posts.find({ user: req.user.id });
    return res.json(posts);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ msg: 'server down' });
  }
});
//?route         GET /api/admin/generate
//?desc           get all  my CV profile post
//?access         private
router.get('/', authMiddleware, async (req, res) => {
  try {
    let posts = await AdminPost.findOne().sort({ createdAt: 1 });

    return res.json(posts);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ msg: 'server error' });
  }
});
//?route         POST /api/admin/generate
//?desc           create a cv post
//?access         private

router.post(
  '/',
  authMiddleware,
  [
    check('name', 'name field cannot be empty')
      .not()
      .isEmpty(),
    check('email', 'email field cannot be empty')
      .not()
      .isEmpty(),
    check('phone', 'phone field cannot be empty')
      .not()
      .isEmpty(),
    check('institution', 'institution field cannot be empty')
      .not()
      .isEmpty(),
    check('pSummary', 'personal summary field cannot be empty')
      .not()
      .isEmpty(),
    check('kSkillCom', 'key skill communication field cannot be empty')
      .not()
      .isEmpty(),
    check('techSkills', 'Tech skills field cannot be empty')
      .not()
      .isEmpty(),
    check('title', 'title field cannot be empty')
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    const error = validationResult(req);

    if (!error.isEmpty()) {
      return res.status(400).json({ msg: error.array() });
    }
    //?check if it admin user making post
    let user = await User.findOne().sort({ date: 1 });
    if (!user) throw error;

    if (user._id.toString() === req.user.id) {
      try {
        const {
          name,
          title,
          institution,
          phone,
          email,
          pSummary,
          kSkillCom,
          techSkills,
          project,
          devTask,
          workExp,
          pastAchieve,
          social
        } = req.body;

        let adminPost = new AdminPost({
          name,
          title,
          institution,
          phone,
          email,
          pSummary,
          kSkillCom,
          techSkills,
          project,
          devTask,
          workExp,
          pastAchieve,
          social,
          user: user._id
        });

        //?save post to admin database
        await adminPost.save();
        return res.json(adminPost);
      } catch (error) {
        console.log(error.message);
        return res.status(500).json({ msg: 'server down' });
      }
    }

    return res.status(401).json({ msg: 'Not Authorized' });
  }
);

//?route         PUT /api/admin/generate
//?desc           update a profile post
//?access         private

router.put('/:id', authMiddleware, async (req, res) => {
  const {
    name,
    title,
    institution,
    phone,
    email,
    pSummary,
    kSkillCom,
    techSkills,
    project,
    devTask,
    workExp,
    pastAchieve,
    social
  } = req.body;

  //?create an update object
  const updateProfile = {};
  if (name) updateProfile.name = name;
  if (title) updateProfile.title = title;
  if (institution) updateProfile.institution = institution;
  if (phone) updateProfile.phone = phone;
  if (email) updateProfile.email = email;
  if (kSkillCom) updateProfile.kSkillCom = kSkillCom;
  if (techSkills) updateProfile.techSkills = techSkills;
  if (project) updateProfile.project = project;
  if (devTask) updateProfile.devTask = devTask;
  if (workExp) updateProfile.workExp = workExp;
  if (pastAchieve) updateProfile.pastAchieve = pastAchieve;
  if (pSummary) updateProfile.pSummary = pSummary;
  if (social) updateProfile.social = social;
  //?update the time and date for every update
  updateProfile.updatedAT = Date.now();

  try {
    const profile = await AdminPost.findById(req.params.id);
    if (!profile) return res.status(404).json({ msg: 'profile not found' });
    //?check if admim id matches the token
    if (profile.user.toString() === req.user.id) {
      const updatedProfile = await AdminPost.findByIdAndUpdate(
        req.params.id,
        updateProfile,
        { new: true }
      );
      return res.json(updatedProfile);
    }
    return res.status(400).json({ msg: 'unAuthorize' });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ msg: 'server error' });
  }
});

module.exports = router;
