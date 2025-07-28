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
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">🛒 Маркет</h1>

      <AddProductForm onProductAdded={handleProductAdded} />

      {error && <p className="text-red-500">{error}</p>}

      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onDelete={handleDelete}
          onUpdate={handleUpdate}
        />
      ))}
    </div>
  );
}
