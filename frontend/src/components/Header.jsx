import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

const Header = () => {
  const navigate = useNavigate()
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('token')
    setIsLoggedIn(!!token)
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('token')
    navigate('/login')
  }

  return (
    <header className="bg-green-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">🌿 SmartFermer</Link>
        <nav className="flex gap-4">
          {!isLoggedIn ? (
            <>
              <Link to="/login" className="hover:underline">Кіру</Link>
              <Link to="/register" className="hover:underline">Тіркелу</Link>
            </>
          ) : (
            <>
              <Link to="/market" className="hover:underline">Market</Link>
              <Link to="/weather" className="hover:underline">Ауа райы</Link>
              <Link to="/tips" className="hover:underline">Кеңестер</Link>
              <Link to="/profile" className="hover:underline">Профиль</Link>
              <button onClick={handleLogout} className="hover:underline">Шығу</button>
            </>
          )}
        </nav>
      </div>
    </header>
  )
}

export default Header
