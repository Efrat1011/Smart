const pool = require('../config/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/env');

exports.register = async (req, res) => {
  const { name, login, password } = req.body;

  console.log('Келген мәлімет:', name, login, password); // жақсы

  if (!name || !login || !password)
    return res.status(400).json({ message: "Бос өріс бар" });

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await pool.query(
      'INSERT INTO users (name, login, password) VALUES ($1, $2, $3) RETURNING *',
      [name, login, hashedPassword]
    );
    res.status(201).json(newUser.rows[0]);
  } catch (err) {
    console.error("Қате (register):", err); // <— осы жолды ҚОСЫҢЫЗ!
    res.status(500).json({ message: err.message });
  }
};

exports.login = async (req, res) => {
  const { login, password } = req.body;
  if (!login || !password) return res.status(400).json({ message: "Бос өріс бар" });

  try {
    const user = await pool.query('SELECT * FROM users WHERE login = $1', [login]);
    if (!user.rows.length) return res.status(400).json({ message: "Қате логин" });

    const isMatch = await bcrypt.compare(password, user.rows[0].password);
    if (!isMatch) return res.status(400).json({ message: "Қате құпиясөз" });

    const token = jwt.sign({ id: user.rows[0].id }, JWT_SECRET, { expiresIn: '1d' });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getProfile = async (req, res) => {
  try {
    const userId = req.user.id;

    const result = await pool.query(
      'SELECT id, name, login, created_at FROM users WHERE id = $1',
      [userId]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Қолданушы табылмады' });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error('Қате:', error);
    res.status(500).json({ message: 'Сервер қатесі' });
  }
};

exports.getProfile = getProfile;
