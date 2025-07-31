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

      const response = await axios.get('http://localhost:5000/api/auth/profile', {
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
    return <div className="text-red-600 text-center mt-6 font-semibold">{error}</div>;
  }

  if (!user) {
    return <div className="text-center text-green-700 mt-6 font-medium">Жүктелуде...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-lime-200 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-6 border border-green-300">
        <h2 className="text-2xl font-bold text-green-800 mb-4 text-center">👩‍🌾 Профиль</h2>
        
        <div className="space-y-3 text-green-900">
          <p><span className="font-semibold">Атыңыз:</span> {user.name}</p>
          <p><span className="font-semibold">Логин:</span> {user.login}</p>
        </div>

        <button
          onClick={handleLogout}
          className="mt-6 w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md shadow transition duration-200"
        >
          🔓 Шығу
        </button>
      </div>
    </div>
  );
};

export default Profile;
