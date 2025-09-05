const User = require('../models/User');
const jwt = require('jsonwebtoken');

// Générer token JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1d' });
};

// ✅ Enregistrer un nouvel utilisateur
const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  // Validation simple
  if (!username || !email || !password) {
    return res.status(400).json({ message: 'Tous les champs sont requis' });
  }

  try {
    const existingUser = await User.findOne({ email: email.toLowerCase() });
    if (existingUser) {
      return res.status(400).json({ message: 'Email déjà utilisé' });
    }

    const newUser = await User.create({ username, email: email.toLowerCase(), password });

    const token = generateToken(newUser._id);

    res.status(201).json({ 
      token, 
      user: { id: newUser._id, username: newUser.username, email: newUser.email } 
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erreur serveur' });
  }
};

// ✅ Login utilisateur
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Tous les champs sont requis' });
  }

  try {
    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user) return res.status(400).json({ message: 'Email ou mot de passe incorrect' });

    const isMatch = await user.matchPassword(password);
    if (!isMatch) return res.status(400).json({ message: 'Email ou mot de passe incorrect' });

    const token = generateToken(user._id);

    res.json({ token, user: { id: user._id, username: user.username, email: user.email } });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erreur serveur' });
  }
};

module.exports = { registerUser, loginUser };
