import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FiSearch, FiThermometer, FiCloud, FiCalendar, FiMapPin } from 'react-icons/fi';

const plantingTips = {
  Astana: {
    crop: 'Картоп, Сәбіз, Қызылша',
    season: 'Сәуір – Маусым',
    image: 'https://www.supersadovnik.ru/binfiles/images/20211110/m15a0808.jpg',
  },
  Almaty: {
    crop: 'Алма, Жүзім, Қияр',
    season: 'Наурыз – Мамыр',
    image: 'https://massaget.kz/userdata/news/news_32527/image_l.jpg',
  },
  Shymkent: {
    crop: 'Бидай, Жүгері, Қарбыз',
    season: 'Ақпан – Сәуір',
    image: 'https://adebiportal.kz/storage/tmp/resize/news/1200_0_TUO5LOJJjjS4uuCxpopKu7P4RyNyB6tuBZnByyXQ.jpg',
  },
  Aqtobe: {
    crop: 'Арпа, Бидай, Асқабақ',
    season: 'Сәуір – Мамыр',
    image: 'https://frankfurt2.apollo.olxcdn.com/v1/files/41gizp9k2ihp-KZ/image;s=1080x774',
  },
  Kyzylorda: {
    crop: 'Күріш, Қияр, Қарбыз',
    season: 'Наурыз – Сәуір',
    image: 'https://zhaikpress.kz/wp-content/oraloniri/news/img/2024/09/FB48D856-0D96-4E23-A7DD-F1BF72BD87FB-e1725936232443.jpeg',
  },
  Oral: {
    crop: 'Картоп, Асқабақ, Сәбіз',
    season: 'Сәуір – Маусым',
    image: 'https://herbalifekazakhstan.com/upload/iblock/113/rbm0croay0qcxcdsg2pak7712zdk2ca5/shutterstock_1470969038.jpg',
  },
  Oskemen: {
    crop: 'Қызылша, Бидай, Жүгері',
    season: 'Мамыр – Маусым',
    image: 'https://uteka.ru/media/202501/2_6550.jpg',
  },
  Pavlodar: {
    crop: 'Сәбіз, Асқабақ, Қияр',
    season: 'Сәуір – Мамыр',
    image: 'https://cdn.pixabay.com/photo/2016/11/23/00/22/carrots-1851424_1280.jpg',
  },
  Karaganda: {
    crop: 'Картоп, Арпа, Қызылша',
    season: 'Сәуір – Маусым',
    image: 'https://kz.kursiv.media/wp-content/uploads/2022/01/old-image-81123-1280x1280.jpg',
  },
  Kostanay: {
    crop: 'Бидай, Арпа, Асқабақ',
    season: 'Сәуір – Мамыр',
    image: 'https://massaget.kz/userdata/news/news_17937/photo.jpg',
  },
};

const Weather = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  const fetchWeather = async () => {
    try {
      setLoading(true);
      const res = await axios.get('https://smart-lk9j.onrender.com/api/weather');
      setWeatherData(res.data);
      setFilteredData(res.data);
    } catch (err) {
      console.error('Ауа райын алу қатесі:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const filtered = weatherData.filter((item) =>
      item.city.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredData(filtered);
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-50 to-green-50 dark:from-blue-950 dark:to-green-950 p-4 sm:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full mb-4">
            <FiThermometer className="h-8 w-8 text-blue-600 dark:text-blue-400" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Қазақстан қалаларындағы ауа райы
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Ауа райы болжамы және егін егуге арналған кеңестер
          </p>
        </div>

        {/* Search Form */}
        <form onSubmit={handleSearch} className="mb-8">
          <div className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                <FiMapPin />
              </div>
              <input
                type="text"
                placeholder="Қала атын енгізіңіз..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-medium rounded-lg shadow-md transition-all duration-300 flex items-center justify-center gap-2"
            >
              <FiSearch />
              Іздеу
            </button>
          </div>
        </form>

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center my-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        )}

        {/* Weather Cards */}
        {!loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredData.length > 0 ? (
              filteredData.map((city, idx) => {
                const tip = plantingTips[city.city];
                return (
                  <div
                    key={idx}
                    className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300"
                  >
                    {/* Weather Info */}
                    <div className="p-5">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                          <FiMapPin className="text-blue-500" />
                          {city.city}
                        </h3>
                        <span className="text-lg font-medium text-blue-600 dark:text-blue-400">
                          {city.temperature}°C
                        </span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 flex items-center gap-2">
                        <FiCloud className="text-gray-400" />
                        {city.description}
                      </p>
                    </div>

                    {/* Planting Tips */}
                    {tip && (
                      <div className="border-t border-gray-200 dark:border-gray-700 p-5 bg-gray-50 dark:bg-gray-700/50">
                        <div className="relative h-40 rounded-lg overflow-hidden mb-3">
                          <img
                            src={tip.image}
                            alt={tip.crop}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="space-y-2">
                          <p className="text-green-700 dark:text-green-400 font-medium flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                            </svg>
                            Өсіруге болатын дақылдар: {tip.crop}
                          </p>
                          <p className="text-gray-600 dark:text-gray-400 flex items-center gap-2">
                            <FiCalendar className="text-gray-400" />
                            Егу маусымы: {tip.season}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })
            ) : (
              <div className="col-span-full text-center py-12">
                <div className="mx-auto h-24 w-24 text-gray-400 dark:text-gray-500 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                  Қала табылмады
                </h3>
                <p className="mt-1 text-gray-500 dark:text-gray-400">
                  Басқа қала атын енгізіп көріңіз
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;