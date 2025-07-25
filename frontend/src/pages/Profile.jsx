// src/pages/Profile.jsx
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Profile() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('token')
        const res = await axios.get('http://localhost:3000/api/me', {
          headers: { Authorization: `Bearer ${token}` },
        })
        setUser(res.data)
      } catch (err) {
        console.error('Қате:', err)
      }
    }

    fetchProfile()
  }, [])

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md dark:bg-slate-800">
      <h2 className="text-2xl font-bold mb-4 text-center text-slate-900 dark:text-white">
        👤 Профиль
      </h2>
      {user ? (
        <div className="space-y-3 text-slate-700 dark:text-slate-200">
          <p><strong>Аты:</strong> {user.name}</p>
          <p><strong>Логин:</strong> {user.login}</p>
          <p><strong>Тіркелген уақыты:</strong> {new Date(user.created_at).toLocaleDateString()}</p>
        </div>
      ) : (
        <p>Жүктелуде...</p>
      )}
    </div>
  )
}
