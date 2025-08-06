import Header from './Header'
import Footer from './Footer'
import { useLocation } from 'react-router-dom'

export default function Layout({ children }) {
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header with conditional styling for homepage */}
      <Header className={isHomePage ? 'absolute top-0 left-0 right-0 z-50 bg-transparent' : ''} />
      
      {/* Main content with optimized spacing */}
      <main className={`flex-grow ${isHomePage ? 'pt-0' : 'pt-24'} pb-12 transition-all duration-300`}>
        <div className={`mx-auto ${isHomePage ? 'max-w-full px-0' : 'max-w-7xl px-4 sm:px-6 lg:px-8'}`}>
          {children}
        </div>
      </main>

      {/* Footer with conditional background */}
      <Footer className={isHomePage ? 'bg-gradient-to-t from-green-800 to-green-900' : ''} />
    </div>
  )
}