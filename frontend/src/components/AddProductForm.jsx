import { useState } from "react";
import axios from "../api/axios";

export default function AddProductForm({ onProductAdded }) {
  const [form, setForm] = useState({ name: "", price: "", description: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res = await axios.post("/products", form);
      onProductAdded(res.data); // жаңа өнімді тізімге қосу үшін
      setForm({ name: "", price: "", description: "" });
    } catch (err) {
      setError("Қате! Өнім қосылмады.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white dark:bg-gray-800 shadow-md rounded p-4 mb-6"
    >
      <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Жаңа өнім қосу</h2>

      {error && <p className="text-red-500 mb-2">{error}</p>}

      <input
        type="text"
        name="name"
        placeholder="Өнім атауы"
        value={form.name}
        onChange={handleChange}
        className="w-full p-2 mb-3 border rounded dark:bg-gray-700 dark:text-white"
        required
      />
      <input
        type="number"
        name="price"
        placeholder="Бағасы"
        value={form.price}
        onChange={handleChange}
        className="w-full p-2 mb-3 border rounded dark:bg-gray-700 dark:text-white"
        required
      />
      <textarea
        name="description"
        placeholder="Сипаттама (міндетті емес)"
        value={form.description}
        onChange={handleChange}
        className="w-full p-2 mb-3 border rounded dark:bg-gray-700 dark:text-white"
      />

      <button
        type="submit"
        className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full"
      >
        Қосу
      </button>
    </form>
  );
}
