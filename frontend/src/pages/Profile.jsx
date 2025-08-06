import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const fetchProfile = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        setError('Кіру уақыты аяқталған. Қайта кіріңіз.');
        navigate('/login');
        return;
      }

      const response = await axios.get('https://smart-lk9j.onrender.com/api/auth/profile', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setUser(response.data);
    } catch (err) {
      console.error('Қате (fetchProfile):', err);
      if (err.response?.status === 401 || err.response?.status === 403) {
        setError('Сессияңыз аяқталды. Қайта кіріңіз.');
        localStorage.removeItem('token');
        navigate('/login');
      } else {
        setError('Профильді жүктеу кезінде қате орын алды');
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-white">
        <div className="bg-white p-6 rounded-xl shadow-lg border border-red-200 max-w-md w-full mx-4">
          <div className="text-red-600 text-center font-semibold text-lg">
            {error}
          </div>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-white">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-600 mb-4"></div>
          <p className="text-green-700 font-medium text-lg">Жүктелуде...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl overflow-hidden border border-gray-100">
        {/* Profile Header */}
        <div className="bg-gradient-to-r from-green-600 to-green-500 p-6 text-center">
          <div className="mx-auto w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-md mb-4">
            <span className="text-3xl">👩‍🌾</span>
          </div>
          <h2 className="text-2xl font-bold text-white">Профиль</h2>
        </div>

        {/* Profile Content */}
        <div className="p-6 space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-700 font-medium">Атыңыз:</p>
            <p className="text-gray-900 text-lg font-semibold">{user.name}</p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-700 font-medium">Логин:</p>
            <p className="text-gray-900 text-lg font-semibold">{user.login}</p>
          </div>

          <button
            onClick={handleLogout}
            className="mt-6 w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-medium py-3 px-4 rounded-lg shadow-md transition-all duration-300 flex items-center justify-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd" />
            </svg>
            Шығу
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;