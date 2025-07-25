import { useEffect, useState } from 'react'
import axios from 'axios'

function Market() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
  const fetchProducts = async () => {
    try {
      const res = await axios.get('/api/products')
      console.log('Келген дерек:', res.data)
      setProducts(res.data.data) // немесе res.data.products — нақты келгенге байланысты
      setLoading(false)
    } catch (err) {
      console.error(err)
      setError('Өнімдерді жүктеу кезінде қате болды')
      setLoading(false)
    }
  }

  fetchProducts()
}, [])


  if (loading) return <p className="text-center mt-10">Жүктелуде...</p>
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-6 text-center">🛒 Market</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-md"
          >
            <img
              src={product.image_url}
              alt={product.name}
              className="w-full h-48 object-cover rounded"
            />
            <h3 className="mt-2 text-lg font-bold">{product.name}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">{product.description}</p>
            <p className="mt-2 font-semibold text-green-600 dark:text-green-400">
              {product.price} ₸
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Market
