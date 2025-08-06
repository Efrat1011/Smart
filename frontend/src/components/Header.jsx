import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const Header = () => {
  const navigate = useNavigate()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('token')
    setIsLoggedIn(!!token)
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('token')
    setIsLoggedIn(false)
    setMobileMenuOpen(false)
    navigate('/login')
  }

  return (
    <header className="bg-gradient-to-r from-green-700 to-green-600 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link
              to="/"
              className="flex items-center text-2xl font-bold tracking-tight hover:opacity-90 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                />
              </svg>
              <span className="hidden sm:inline">SmartFermer</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {isLoggedIn ? (
              <>
                <Link
                  to="/market"
                  className="text-white hover:text-green-100 px-3 py-2 rounded-md text-sm font-medium transition"
                >
                  Нарық
                </Link>
                <Link
                  to="/weather"
                  className="text-white hover:text-green-100 px-3 py-2 rounded-md text-sm font-medium transition"
                >
                  Ауа райы
                </Link>
                <Link
                  to="/tips"
                  className="text-white hover:text-green-100 px-3 py-2 rounded-md text-sm font-medium transition"
                >
                  Кеңестер
                </Link>
                <Link
                  to="/profile"
                  className="text-white hover:text-green-100 px-3 py-2 rounded-md text-sm font-medium transition"
                >
                  Профиль
                </Link>
                <button
                  onClick={handleLogout}
                  className="bg-green-800 hover:bg-green-900 text-white px-4 py-2 rounded-md text-sm font-medium transition"
                >
                  Шығу
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-white hover:text-green-100 px-3 py-2 rounded-md text-sm font-medium transition"
                >
                  Кіру
                </Link>
                <Link
                  to="/register"
                  className="bg-white hover:bg-gray-100 text-green-700 px-4 py-2 rounded-md text-sm font-medium transition"
                >
                  Тіркелу
                </Link>
              </>
            )}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-green-100 hover:bg-green-700 focus:outline-none transition"
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <XMarkIcon className="block h-6 w-6" />
              ) : (
                <Bars3Icon className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-green-700">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {isLoggedIn ? (
              <>
                <Link
                  to="/market"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white hover:bg-green-600 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Нарық
                </Link>
                <Link
                  to="/weather"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white hover:bg-green-600 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Ауа райы
                </Link>
                <Link
                  to="/tips"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white hover:bg-green-600 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Кеңестер
                </Link>
                <Link
                  to="/profile"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white hover:bg-green-600 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Профиль
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-full text-left text-white hover:bg-green-600 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Шығу
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white hover:bg-green-600 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Кіру
                </Link>
                <Link
                  to="/register"
                  onClick={() => setMobileMenuOpen(false)}
                  className="bg-white text-green-700 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Тіркелу
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  )
}

export default Header