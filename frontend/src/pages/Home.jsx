// import React from 'react'

// const Home = () => {
//   return (
//     <main className="min-h-screen bg-white dark:bg-gray-900">
//       {/* Hero секциясы */}
//       <div
//         className="bg-[url('https://images.unsplash.com/photo-1596568351234-f16acb57d4c4?auto=format&fit=crop&w=1600&q=80')] 
//                    bg-cover bg-center text-white py-32 px-4 text-center"
//       >
//         <h1 className="text-5xl md:text-6xl font-extrabold drop-shadow-lg">
//           SmartFermer — Сіздің цифрлық көмекшіңіз
//         </h1>
//         <p className="mt-6 text-lg md:text-xl drop-shadow-md">
//           Ауыл шаруашылығын тиімді жүргізуге арналған құралдар мен кеңестер
//         </p>
//       </div>

//       {/* Қызметтер секциясы */}
//       <section className="max-w-6xl mx-auto py-16 px-4 grid md:grid-cols-3 gap-8 text-center">
//         <div className="bg-green-100 rounded-2xl p-6 shadow-md">
//           <h2 className="text-xl font-bold mb-2">Нарық мәліметтері</h2>
//           <p className="text-gray-700">Ауыл өнімдерінің бағаларын біліп отырыңыз</p>
//         </div>
//         <div className="bg-yellow-100 rounded-2xl p-6 shadow-md">
//           <h2 className="text-xl font-bold mb-2">Ауа райы болжамы</h2>
//           <p className="text-gray-700">Егіс пен егінге ыңғайлы күндерді бақылаңыз</p>
//         </div>
//         <div className="bg-blue-100 rounded-2xl p-6 shadow-md">
//           <h2 className="text-xl font-bold mb-2">Кеңестер мен видеолар</h2>
//           <p className="text-gray-700">Маман пікірлері мен видео нұсқаулықтар</p>
//         </div>
//       </section>

//       {/* Видео бөлім / идея */}
//       <section className="max-w-4xl mx-auto py-10 px-4">
//         <h2 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-gray-100">
//           Жаңадан бастаған фермерлерге арналған бейнематериалдар
//         </h2>
//         <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
//           <iframe
//             className="w-full h-full"
//             src="https://www.youtube.com/embed/b6ysQ42d2h4?si=uuQRbxRgHzysSB_Z"
//             title="Фермерлерге арналған видео"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowFullScreen
//     ></iframe>
//   </div>
// </section>

//     </main>
//   )
// }

// export default Home
import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  const features = [
    { title: "🌦 Ауа райы", desc: "Өзіңіздің аймағыңыз бойынша нақты ауа райы болжамдары.", link: "/weather" },
    { title: "📈 Нарық", desc: "Ауыл шаруашылық өнімдерінің нақты бағалары мен тенденциялары.", link: "/market" },
    { title: "💬 Кеңестер", desc: "Кәсіби фермерлерден ай сайынғы кеңестер.", link: "/tips" },
    { title: "📍 Карта", desc: "Аймақ бойынша фермерлердің орналасуы мен қызметтері.", link: "#" },
    { title: "🖼 Галерея", desc: "Егін және техника суреттерін көру және жүктеу.", link: "#" },
    { title: "📅 Жоспарлау", desc: "Күнтізбе арқылы шаруашылық жұмыстарыңызды жоспарлаңыз.", link: "#" },
    { title: "📥 Хабарламалар", desc: "Маңызды ескертулер мен мемлекеттік жаңалықтар.", link: "#" },
    { title: "🧮 Калькулятор", desc: "Өнім, шығын, пайда бойынша есептеулер.", link: "#" },
  ]

  const testimonials = [
    {
      name: "Бауыржан",
      comment: "SmartFermer арқылы мен өз егінімді басқаруды оңайлаттым. Баға, кеңес – бәрі бір жерде.",
    },
    {
      name: "Айгерім",
      comment: "Бұл жүйе шынымен көмектесті. Субсидия алуға қажетті ақпарат дәл уақытында келді!",
    }
  ]

  return (
    <div className="p-6 space-y-10 max-w-7xl mx-auto">
      
      {/* Header */}
      <section className="text-center">
        <h1 className="text-4xl font-bold text-green-700 mb-2">🌾 SmartFermer жүйесіне қош келдіңіз!</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Бұл платформа ауыл шаруашылығындағы барлық маңызды ақпаратты біріктіріп, фермерлердің күнделікті жұмысын жеңілдетуге бағытталған.
        </p>
      </section>

      {/* Features */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">🚜 Платформа бөлімдері</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {features.map((item, index) => (
            <Link key={index} to={item.link} className="block bg-white shadow-md rounded p-4 hover:bg-green-50 transition">
              <h3 className="font-bold text-lg">{item.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">👨‍🌾 Фермер пікірлері</h2>
        <div className="space-y-4">
          {testimonials.map((item, index) => (
            <div key={index} className="bg-green-50 border-l-4 border-green-600 p-4 rounded">
              <p className="italic">"{item.comment}"</p>
              <p className="text-right font-semibold">– {item.name}</p>
            </div>
          ))}
        </div>
      </section>

       {/* Видео бөлім / идея */}
       <section className="max-w-4xl mx-auto py-10 px-4">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-black-100">
           Жаңадан бастаған фермерлерге арналған бейнематериалдар
        </h2>
         <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
           <iframe
             className="w-full h-full"
             src="https://www.youtube.com/embed/b6ysQ42d2h4?si=uuQRbxRgHzysSB_Z"
             title="Фермерлерге арналған видео"
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
             allowFullScreen
          ></iframe>
        </div>
     </section>
      {/* Quick links */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">🔗 Жылдам сілтемелер</h2>
        <div className="flex flex-wrap gap-3">
          <Link to="/weather" className="bg-blue-100 px-4 py-2 rounded hover:bg-blue-200">Ауа райы</Link>
          <Link to="/market" className="bg-yellow-100 px-4 py-2 rounded hover:bg-yellow-200">Нарық</Link>
          <Link to="/tips" className="bg-green-100 px-4 py-2 rounded hover:bg-green-200">Кеңестер</Link>
          <Link to="/profile" className="bg-gray-100 px-4 py-2 rounded hover:bg-gray-200">Профиль</Link>
        </div>
      </section>
    </div>
  )
}

export default Home
