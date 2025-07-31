import { useState } from "react";
import axios from "../api/axios";

export default function ProductCard({ product, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(product.price);
  const [description, setDescription] = useState(product.description || "");

  const handleDelete = async () => {
    try {
      await axios.delete(`/products/${product.id}`);
      onDelete(product.id);
    } catch (err) {
      console.error("Өшіру қатесі", err);
    }
  };

  const handleUpdate = async () => {
    try {
      const res = await axios.put(`/products/${product.id}`, {
        name,
        price,
        description,
      });
      onUpdate(res.data);
      setIsEditing(false);
    } catch (err) {
      console.error("Жаңарту қатесі", err);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-2xl p-4 border border-gray-200 dark:border-gray-700 transition hover:shadow-lg">
      {isEditing ? (
        <div className="space-y-3">
          <input
            type="text"
            className="w-full px-3 py-2 rounded-md border dark:bg-gray-700 dark:text-white"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Өнім атауы"
          />
          <input
            type="number"
            className="w-full px-3 py-2 rounded-md border dark:bg-gray-700 dark:text-white"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Бағасы"
          />
          <textarea
            className="w-full px-3 py-2 rounded-md border dark:bg-gray-700 dark:text-white"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Сипаттама"
            rows={3}
          />
          <div className="flex justify-between mt-2">
            <button
              onClick={handleUpdate}
              className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700"
            >
              ✅ Сақтау
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="bg-gray-400 text-white px-4 py-1 rounded hover:bg-gray-500"
            >
              ❌ Бас тарту
            </button>
          </div>
        </div>
      ) : (
        <div>
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
            {product.name}
          </h2>
          <p className="text-gray-600 dark:text-gray-300">Бағасы: {product.price} ₸</p>
          <p className="text-gray-500 dark:text-gray-400 mt-2 mb-4">
            {product.description || "Сипаттама жоқ"}
          </p>
          <div className="flex justify-between">
            <button
              onClick={() => setIsEditing(true)}
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-3 py-1 rounded"
            >
              ✏️ Өзгерту
            </button>
            <button
              onClick={handleDelete}
              className="bg-red-500 hover:bg-red-600 text-white font-medium px-3 py-1 rounded"
            >
              🗑️ Өшіру
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
