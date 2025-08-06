import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const features = [
    { 
      title: "Ауа райы", 
      desc: "Аймағыңыз бойынша нақты ауа райы болжамдары", 
      link: "/weather",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
      borderColor: "border-blue-100"
    },
    { 
      title: "Нарық бағасы", 
      desc: "Ауыл шаруашылық өнімдерінің бағалары", 
      link: "/market",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      bgColor: "bg-green-50",
      textColor: "text-green-600",
      borderColor: "border-green-100"
    },
    { 
      title: "Кеңестер", 
      desc: "Кәсіби фермерлерден пайдалы кеңестер", 
      link: "/tips",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      bgColor: "bg-amber-50",
      textColor: "text-amber-600",
      borderColor: "border-amber-100"
    },
    { 
      title: "Егін бақылау", 
      desc: "Егініңіздің дамуын бақылаңыз", 
      link: "#",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      bgColor: "bg-emerald-50",
      textColor: "text-emerald-600",
      borderColor: "border-emerald-100"
    }
  ];

  const testimonials = [
    {
      name: "Эфрат Насыров",
      role: "Байсеит, бидай өсіруші",
      comment: "SmartFarmer арқылы өнімділігімді 30%-ға арттырдым. Баға, кеңес - бәрі бір жерде.",
      avatar: "EN"
    },
    {
      name: "Анара Аутова",
      role: "Байсеит, жеміс өсіруші",
      comment: "Бұл жүйе шынымен көмектесті. Субсидия алуға қажетті ақпарат дәл уақытында келді!",
      avatar: "АA"
    }
  ];

  const stats = [
    { value: "10,000+", label: "Қолданушы" },
    { value: "45", label: "Облыстар" },
    { value: "150+", label: "Кеңес" },
    { value: "24/7", label: "Қолдау" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-green-700 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-800 opacity-90"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              SmartFarmer - Ауыл шаруашылығының цифрлық шешімі
            </h1>
            <p className="mt-6 text-xl text-green-100 max-w-3xl mx-auto">
              Фермерлер үшін барлық қажетті құралдар бір платформада: ауа райы, нарық бағасы, кеңестер және бақылау
            </p>
            
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Біздің мүмкіндіктер
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
              Фермерлік бизнесіңізді жеңілдететін қуатты құралдар
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature, index) => (
                <Link
                  key={index}
                  to={feature.link}
                  className={`pt-10 pb-8 px-6 ${feature.bgColor} border ${feature.borderColor} rounded-lg text-center hover:shadow-md transition duration-300`}
                >
                  <div className={`${feature.textColor} mx-auto h-12 w-12 flex items-center justify-center`}>
                    {feature.icon}
                  </div>
                  <h3 className="mt-6 text-lg font-medium text-gray-900">{feature.title}</h3>
                  <p className="mt-2 text-base text-gray-600">{feature.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-green-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl font-extrabold text-white">{stat.value}</p>
                <p className="mt-2 text-lg font-medium text-green-100">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16 bg-gray-50 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Қолданушылардың пікірлері
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
              Біздің платформаны пайдаланатын фермерлердің бағалары
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-green-100 flex items-center justify-center text-green-800 font-bold">
                    {testimonial.avatar}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">{testimonial.name}</h3>
                    <p className="text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <p className="mt-4 text-gray-600 italic">"{testimonial.comment}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div className="py-16 bg-white sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Жаңадан бастаған фермерлерге арналған бейнематериалдар
            </h2>
          </div>
          <div className="mt-12 aspect-w-16 aspect-h-9 w-full max-w-4xl mx-auto rounded-xl shadow-xl overflow-hidden">
            <iframe
              className="w-full h-96"
              src="https://www.youtube.com/embed/b6ysQ42d2h4?si=uuQRbxRgHzysSB_Z"
              title="Фермерлерге арналған видео"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-green-700">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Дамуға дайынсыз ба?</span>
            <span className="block text-green-200">SmartFarmer-ді бүгін қолданып көріңіз</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link
                to="/register"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-green-600 bg-white hover:bg-green-50 transition duration-150"
              >
                Тіркелу
              </Link>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;