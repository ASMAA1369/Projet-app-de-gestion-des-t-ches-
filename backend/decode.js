const jwt = require('jsonwebtoken');

const decodeToken = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    console.error('Token invalide', err);
    return null;
  }
};

module.exports = decodeToken;
