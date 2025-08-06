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
    <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
      {isEditing ? (
        <div className="p-5 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Өнім атауы
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Өнім атауы"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Бағасы
            </label>
            <input
              type="number"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Бағасы"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Сипаттама
            </label>
            <textarea
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Сипаттама"
              rows={3}
            />
          </div>

          <div className="flex justify-end space-x-3 pt-2">
            <button
              onClick={() => setIsEditing(false)}
              className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg font-medium transition"
            >
              Бас тарту
            </button>
            <button
              onClick={handleUpdate}
              className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Сақтау
            </button>
          </div>
        </div>
      ) : (
        <div className="p-5">
          <div className="flex justify-between items-start mb-3">
            <h2 className="text-xl font-bold text-gray-800 dark:text-white truncate">
              {product.name}
            </h2>
            <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm font-semibold px-2.5 py-0.5 rounded">
              {product.price} ₸
            </span>
          </div>

          <p className={`text-gray-600 dark:text-gray-300 mb-4 ${!product.description && "italic text-gray-400"}`}>
            {product.description || "Сипаттама жоқ"}
          </p>

          <div className="flex justify-end space-x-3 border-t border-gray-100 dark:border-gray-700 pt-4">
            <button
              onClick={() => setIsEditing(true)}
              className="px-3 py-1.5 bg-yellow-100 hover:bg-yellow-200 text-yellow-800 rounded-lg font-medium transition flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
              </svg>
              Өзгерту
            </button>
            <button
              onClick={handleDelete}
              className="px-3 py-1.5 bg-red-100 hover:bg-red-200 text-red-800 rounded-lg font-medium transition flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              Өшіру
            </button>
          </div>
        </div>
      )}
    </div>
  );
}