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
    <div className="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 max-w-7xl mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-4xl sm:text-5xl font-bold text-green-700 dark:text-green-300">
          🛒 Фермерлік Маркет
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400 text-base sm:text-lg">
          Мұнда өзіңіздің ауылшаруашылық өнімдеріңізді қосыңыз немесе көріңіз
        </p>
      </div>

      {/* Жаңа өнім қосу формасы */}
      <div className="mb-8">
        <AddProductForm onProductAdded={handleProductAdded} />
      </div>

      {/* Қате хабарламасы */}
      {error && (
        <p className="text-red-500 bg-red-100 dark:bg-red-800 p-3 rounded-md text-center my-4">
          {error}
        </p>
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
        <p className="text-center text-gray-600 dark:text-gray-400 mt-10 text-lg">
          Қазіргі уақытта өнімдер жоқ.
        </p>
      )}
    </div>
  );
}
