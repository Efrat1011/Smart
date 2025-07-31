import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-green-700 text-white py-8 px-4 mt-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Сол жақ бөлім: лого мен текст */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold">🌿 SmartFermer</h2>
          <p className="text-sm mt-1">© 2025 Барлық құқықтар қорғалған.</p>
        </div>

        {/* Ортаңғы бөлім: әлеуметтік желілер */}
        <div className="flex gap-6 text-xl">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <FaFacebookF />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <FaInstagram />
          </a>
          <a href="https://wa.me/77001234567" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <FaWhatsapp />
          </a>
        </div>

        {/* Оң жақ бөлім: Контакт мәліметтері */}
        <div className="text-center md:text-right text-sm leading-relaxed">
          <p>Байланыс: +7 (705) 143-93-73</p>
          <p>Email: support@smartfermer.kz</p>
        </div>
      </div>
    </footer>
  )
}
