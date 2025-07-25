const pool = require('../config/db');

// ✅ Өнім қосу
const addProduct = async (req, res) => {
  const { name, description, price, image_url } = req.body;

  if (!name || !description || !price || !image_url) {
    return res.status(400).json({ message: 'Барлық өріс толтырылуы керек' });
  }

  try {
    const result = await pool.query(
      'INSERT INTO products (name, description, price, image_url) VALUES ($1, $2, $3, $4) RETURNING *',
      [name, description, price, image_url]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error('Қате:', err);
    res.status(500).json({ message: 'Сервер қатесі' });
  }
};

// ✅ Барлық өнімдерді алу
const getAllProducts = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM products ORDER BY id DESC');
    res.status(200).json(result.rows);
  } catch (err) {
    console.error('Өнімдерді алу қатесі:', err);
    res.status(500).json({ message: 'Серверде қате болды' });
  }
};

module.exports = {
  addProduct,
  getAllProducts
};
