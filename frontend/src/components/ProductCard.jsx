function ProductCard({ product }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 flex flex-col">
      <img src={product.image_url} alt={product.name} className="h-40 object-cover rounded-md mb-4" />
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-sm text-gray-600">{product.description}</p>
      <div className="mt-2 text-green-600 font-bold">{product.price} ₸</div>
    </div>
  );
}

export default ProductCard;
