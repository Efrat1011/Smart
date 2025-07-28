import { useState } from "react";
import axios from "../api/axios";

export default function ProductCard({ product, onDelete, onUpdate }) {
  const [editMode, setEditMode] = useState(false);
  const [form, setForm] = useState({ ...product });

  const handleDelete = async () => {
    try {
      await axios.delete(`/products/${product.id}`);
      onDelete(product.id);
    } catch (err) {
      alert("Өнімді өшіруде қате шықты.");
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`/products/${product.id}`, form);
      onUpdate(res.data);
      setEditMode(false);
    } catch (err) {
      alert("Жаңарту кезінде қате.");
    }
  };

  return (
    <div className="p-4 bg-white dark:bg-gray-800 shadow rounded mb-4">
      {editMode ? (
        <form onSubmit={handleUpdate}>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full mb-2 p-2 border rounded"
          />
          <input
            type="number"
            name="price"
            value={form.price}
            onChange={(e) => setForm({ ...form, price: e.target.value })}
            className="w-full mb-2 p-2 border rounded"
          />
          <textarea
            name="description"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            className="w-full mb-2 p-2 border rounded"
          />
          <div className="flex gap-2">
            <button type="submit" className="bg-blue-600 text-white px-4 py-1 rounded">Сақтау</button>
            <button type="button" onClick={() => setEditMode(false)} className="bg-gray-400 text-white px-4 py-1 rounded">Болдырмау</button>
          </div>
        </form>
      ) : (
        <>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{product.name}</h3>
          <p className="text-gray-600 dark:text-gray-300">{product.description}</p>
          <p className="font-bold text-green-600 dark:text-green-400">{product.price} ₸</p>
          <div className="flex gap-3 mt-2">
            <button
              onClick={() => setEditMode(true)}
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded"
            >
              Өзгерту
            </button>
            <button
              onClick={handleDelete}
              className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
            >
              Өшіру
            </button>
          </div>
        </>
      )}
    </div>
  );
}
