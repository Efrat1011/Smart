import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [form, setForm] = useState({ login: '', password: '' })
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
  e.preventDefault()
  setError('')
  try {
    const res = await axios.post('http://localhost:5000/api/auth/login', form)
    
    if (res.data.token) {
      // 👉 Токенді сақтау
      localStorage.setItem('token', res.data.token)
      
      // 👉 Басты бетке бағыттау
      navigate('/')
    }

  } catch (err) {
    setError(err.response?.data?.message || '❌Қате орын алды')
  }
}


  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 px-4 py-8">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
          👋 Қош келдіңіз!
        </h2>
        {error && (
          <div className="text-red-600 bg-red-100 border border-red-300 p-2 mb-4 rounded text-sm text-center">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Логин</label>
            <input
              type="text"
              name="login"
              value={form.login}
              onChange={handleChange}
              placeholder="example@mail.com"
              className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Құпиясөз</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="********"
              className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition duration-300"
          >
            🔐 Кіру
          </button>
        </form>
        <p className="text-center text-sm text-gray-500 mt-4">
          Аккаунтыңыз жоқ па?{' '}
          <span
            onClick={() => navigate('/register')}
            className="text-blue-700 hover:underline cursor-pointer"
          >
            Тіркелу
          </span>
        </p>
      </div>
    </div>
  )
}

export default Login
