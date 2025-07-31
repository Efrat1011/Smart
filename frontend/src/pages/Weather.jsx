import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
      const res = await axios.get('http://localhost:5000/api/weather');
      setWeatherData(res.data);
      setFilteredData(res.data);
    } catch (err) {
      console.error('Ауа райын алу қатесі:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    const filtered = weatherData.filter((item) =>
      item.city.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredData(filtered);
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  return (
    <div className="min-h-[100dvh] w-full bg-gradient-to-br from-blue-100 to-green-200 dark:from-blue-950 dark:to-green-900 p-4 sm:p-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-blue-900 dark:text-blue-100 text-center">
          🌦 Қазақстан қалаларындағы ауа райы және егін егу кеңестері
        </h2>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 mb-8 px-2">
          <input
            type="text"
            placeholder="Қаланы енгізіңіз..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-4 py-2 rounded-md border border-blue-300 shadow w-full sm:w-[60%] focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={handleSearch}
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md font-semibold shadow transition w-full sm:w-auto"
          >
            🔍 Іздеу
          </button>
        </div>

        {loading ? (
          <p className="text-center text-gray-700 dark:text-gray-200 text-lg">⏳ Жүктелуде...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredData.length > 0 ? (
              filteredData.map((city, idx) => {
                const tip = plantingTips[city.city];
                return (
                  <div
                    key={idx}
                    className="bg-white dark:bg-blue-900/60 border border-blue-200 dark:border-blue-800 rounded-2xl p-5 shadow-lg hover:shadow-xl hover:scale-[1.02] transition duration-200"
                  >
                    <h3 className="text-xl font-semibold text-blue-800 dark:text-white mb-2">{city.city}</h3>
                    <p className="text-gray-700 dark:text-gray-300">🌡 Температура: {city.temperature}°C</p>
                    <p className="text-gray-700 dark:text-gray-300 mb-3">🌤 Сипаттама: {city.description}</p>

                    {tip && (
                      <>
                        <img
                          src={tip.image}
                          alt={tip.crop}
                          className="rounded-md w-full h-36 object-cover mb-3"
                        />
                        <p className="text-green-800 dark:text-green-300 font-medium">🌱 Өсіру үшін: {tip.crop}</p>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">📅 Маусымы: {tip.season}</p>
                      </>
                    )}
                  </div>
                );
              })
            ) : (
              <p className="col-span-full text-center text-red-600 font-semibold">Қала табылмады 😕</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;
