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
    <header className="bg-green-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link
          to="/"
          className="text-2xl font-bold tracking-tight hover:opacity-90 transition"
        >
          🌿 SmartFermer
        </Link>

        <nav className="hidden md:flex gap-6 font-medium">
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
              <button
                onClick={handleLogout}
                className="hover:underline text-white"
              >
                Шығу
              </button>
            </>
          )}
        </nav>

        {/* Mobile nav toggle (future: can add hamburger if needed) */}
        <div className="md:hidden text-sm">
          {isLoggedIn ? (
            <Link to="/profile" className="underline">Меню</Link>
          ) : (
            <Link to="/login" className="underline">Кіру</Link>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
