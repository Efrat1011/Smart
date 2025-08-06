import { useEffect, useState } from "react";
import axios from "../api/axios";
import AddProductForm from "../components/AddProductForm";
import ProductCard from "../components/ProductCard";

export default function Market() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  const fetchProducts = async () => {
    try {
      const res = await axios.get("/products");
      setProducts(res.data);
    } catch (err) {
      setError("Өнімдерді жүктеу қатесі");
    }
  };

  const handleProductAdded = (newProduct) => {
    setProducts([newProduct, ...products]);
  };

  const handleDelete = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  const handleUpdate = (updatedProduct) => {
    setProducts(products.map((p) => (p.id === updatedProduct.id ? updatedProduct : p)));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white dark:from-gray-900 dark:to-gray-800 p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 max-w-7xl mx-auto">
      <div className="text-center mb-10">
        <div className="inline-flex items-center justify-center bg-white dark:bg-gray-800 p-4 rounded-full shadow-lg mb-4">
          <span className="text-4xl">🛒</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-800 dark:from-green-300 dark:to-green-500">
          Фермерлік Маркет
        </h1>
        <p className="mt-4 text-gray-600 dark:text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
          Мұнда өзіңіздің ауылшаруашылық өнімдеріңізді қосыңыз немесе көріңіз
        </p>
      </div>

      {/* Жаңа өнім қосу формасы */}
      <div className="mb-10 bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-100 dark:border-gray-700">
        <AddProductForm onProductAdded={handleProductAdded} />
      </div>

      {/* Қате хабарламасы */}
      {error && (
        <div className="mb-6 p-4 bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-300 rounded-lg border border-red-200 dark:border-red-800 text-center">
          {error}
        </div>
      )}

      {/* Өнімдер тізімі */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onDelete={handleDelete}
            onUpdate={handleUpdate}
          />
        ))}
      </div>

      {/* Егер ешқандай өнім болмаса */}
      {products.length === 0 && (
        <div className="text-center py-12">
          <div className="inline-block bg-gray-100 dark:bg-gray-700 p-4 rounded-full mb-4">
            <span className="text-3xl text-gray-400 dark:text-gray-500">😕</span>
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-lg font-medium">
            Қазіргі уақытта өнімдер жоқ
          </p>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            Жаңа өнім қосу үшін жоғарыдағы форманы толтырыңыз
          </p>
        </div>
      )}
    </div>
  );
}