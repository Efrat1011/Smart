import { useState } from 'react'
import axios from 'axios'

function AddProduct() {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    image_url: ''
  })

  const [message, setMessage] = useState('')

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post('/api/products', product)
      setMessage('Өнім сәтті қосылды!')
      setProduct({ name: '', description: '', price: '', image_url: '' })
    } catch (err) {
      console.error(err)
      setMessage('Қате: өнім қосу мүмкін болмады')
    }
  }

  return (
    <div className="max-w-xl mx-auto bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md mt-8">
      <h2 className="text-2xl font-bold mb-4 text-center">🛒 Өнім қосу</h2>
      {message && <p className="mb-4 text-center text-green-600 dark:text-green-400">{message}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Атауы"
          value={product.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <textarea
          name="description"
          placeholder="Сипаттама"
          value={product.description}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          name="price"
          placeholder="Бағасы"
          value={product.price}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="image_url"
          placeholder="Сурет URL"
          value={product.image_url}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700"
        >
          Қосу
        </button>
      </form>
    </div>
  )
}

export default AddProduct
