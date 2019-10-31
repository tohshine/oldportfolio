const mongoose = require('mongoose');

const adminPostSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  title:{
    type:String,
    required:true
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
    type: String,
    required: true
  },
  techSkills: {
    type: String,
    required: true
  },
  project: {
    type: String
  },
  devTask: {
    type: String
  },
  workExp: {
    type: String
  },
  pastAchieve: {
    type: String
  },
  social: {
    type: String
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
