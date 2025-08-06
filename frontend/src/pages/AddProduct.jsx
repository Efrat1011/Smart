import { useState } from 'react'
import axios from 'axios'
import { FiPlus, FiImage, FiDollarSign, FiFileText, FiTag } from 'react-icons/fi'

function AddProduct() {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    image_url: ''
  })

  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage('')
    
    try {
      const res = await axios.post('/api/products', product)
      setMessage('Өнім сәтті қосылды!')
      setProduct({ name: '', description: '', price: '', image_url: '' })
    } catch (err) {
      console.error(err)
      setMessage(err.response?.data?.message || 'Қате: өнім қосу мүмкін болмады')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="max-w-md mx-auto bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg mt-8 border border-gray-100 dark:border-slate-700">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white flex items-center justify-center gap-2">
          <FiPlus className="text-green-500" />
          Өнім қосу
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mt-1">Жаңа өнімді жүйеге қосыңыз</p>
      </div>

      {message && (
        <div className={`mb-4 p-3 rounded-md text-center ${message.includes('Қате') ? 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300' : 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'}`}>
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
            <FiTag />
          </div>
          <input
            type="text"
            name="name"
            placeholder="Өнім атауы"
            value={product.name}
            onChange={handleChange}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-slate-700 dark:text-white"
            required
          />
        </div>

        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
            <FiFileText />
          </div>
          <textarea
            name="description"
            placeholder="Өнім сипаттамасы"
            value={product.description}
            onChange={handleChange}
            rows={3}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-slate-700 dark:text-white"
          />
        </div>

        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
            <FiDollarSign />
          </div>
          <input
            type="number"
            name="price"
            placeholder="Бағасы"
            value={product.price}
            onChange={handleChange}
            min="0"
            step="0.01"
            className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-slate-700 dark:text-white"
            required
          />
        </div>

        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
            <FiImage />
          </div>
          <input
            type="url"
            name="image_url"
            placeholder="Сурет URL мекенжайы (міндетті емес)"
            value={product.image_url}
            onChange={handleChange}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-slate-700 dark:text-white"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-medium py-2 px-4 rounded-lg shadow-md transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Қосуда...
            </>
          ) : (
            <>
              <FiPlus />
              Өнімді қосу
            </>
          )}
        </button>
      </form>
    </div>
  )
}

export default AddProduct