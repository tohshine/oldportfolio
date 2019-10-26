const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function(req, res, next) {
  const token = req.header('x-auth-token');
  if (!token) {
    return res.status(400).json({ msg: 'not authorized' });
  }
  try {
    const decoder = jwt.decode(token, config.get('jwtSecret'));
    req.user = decoder.user;
    next();
  } catch (error) {
    console.log(error.message);
    return res.status(401).json({ msg: 'invalid token' });
  }
};
