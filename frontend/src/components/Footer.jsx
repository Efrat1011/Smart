import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-green-800 to-green-900 text-white py-12 px-4 md:px-6 shadow-lg">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Лого и текст - увеличен отступ и добавлены эффекты */}
        <div className="text-center md:text-left space-y-2">
          <h2 className="text-3xl font-bold flex items-center justify-center md:justify-start gap-2">
            <span className="text-green-300">🌿</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-white">
              SmartFermer
            </span>
          </h2>
          <p className="text-green-200 text-sm mt-1">
            © 2025 Барлық құқықтар қорғалған.
          </p>
        </div>

        {/* Соцсети - стилизованные кнопки */}
        <div className="flex gap-5">
          <a 
            href="https://facebook.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-green-700 hover:bg-green-600 p-3 rounded-full text-white transition-all duration-300 transform hover:scale-110 shadow-md"
          >
            <FaFacebookF className="text-lg" />
          </a>
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-green-700 hover:bg-green-600 p-3 rounded-full text-white transition-all duration-300 transform hover:scale-110 shadow-md"
          >
            <FaInstagram className="text-lg" />
          </a>
          <a 
            href="https://wa.me/77001234567" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-green-700 hover:bg-green-600 p-3 rounded-full text-white transition-all duration-300 transform hover:scale-110 shadow-md"
          >
            <FaWhatsapp className="text-lg" />
          </a>
        </div>

        {/* Контакты - улучшенное оформление */}
        <div className="text-center md:text-right space-y-2">
          <p className="flex items-center justify-center md:justify-end gap-2 text-green-100">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 text-green-300" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" 
              />
            </svg>
            +7 (705) 143-93-73
          </p>
          <p className="flex items-center justify-center md:justify-end gap-2 text-green-100">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 text-green-300" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
              />
            </svg>
            support@smartfermer.kz
          </p>
        </div>
      </div>
    </footer>
  )
}