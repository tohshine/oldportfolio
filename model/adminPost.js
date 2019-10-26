const mongoose = require('mongoose');

const adminPostSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  institution: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  pSummary: {
    type: String,
    required: true
  },
  kSkillCom: {
    type: Array,
    required: true
  },
  techSkills: {
    type: Array,
    required: true
  },
  project: {
    type: Array
  },
  devTask: {
    type: Array
  },
  workExp: {
    type: String
  },
  pastAchieve: {
    type: String
  },
  social: {
    type: Array
  },
  createdAT:{
    type:Date,
    default:Date.now
  },
  updatedAT:{
    type:Date,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  }
});
module.exports = mongoose.model('adminPosts', adminPostSchema);
