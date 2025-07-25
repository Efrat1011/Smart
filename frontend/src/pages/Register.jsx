import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Register() {
  const [name, setName] = useState('')
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', {
        name,
        login,
        password
      })

      if (res.status === 200 || res.status === 201) {
        alert('✅ Сәтті тіркелдіңіз!')
        navigate('/login')
      }
    } catch (err) {
      alert(err.response?.data?.message || '❌ Қате! Тіркелу сәтсіз.')
      console.error('Register error:', err)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 to-lime-200 px-4 py-8">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-green-700 mb-6">
          Тіркелу формасы
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Атыңыз</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full mt-1 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Атыңыз"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email / Логин</label>
            <input
              type="email"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              className="w-full mt-1 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="example@email.com"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Құпиясөз</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-1 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Құпиясөзді енгізіңіз"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition duration-300"
          >
            ✅ Тіркелу
          </button>
        </form>
        <p className="text-center text-sm text-gray-500 mt-4">
          Аккаунтыңыз бар ма?{' '}
          <span
            className="text-green-700 hover:underline cursor-pointer"
            onClick={() => navigate('/login')}
          >
            Кіру
          </span>
        </p>
      </div>
    </div>
  )
}
