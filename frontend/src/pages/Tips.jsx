import { useState, useEffect } from "react";
import axios from "../api/axios";
import { FiSend, FiClock, FiMessageSquare, FiHelpCircle } from "react-icons/fi";

export default function Tips() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchTips = async () => {
    try {
      const res = await axios.get("/gemini/tips");
      setHistory(res.data);
    } catch (err) {
      setError("Кеңестерді жүктеу кезінде қате орын алды");
      console.error("Fetch tips error:", err);
    }
  };

  useEffect(() => {
    fetchTips();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!question.trim()) return;
    
    setLoading(true);
    setAnswer("");
    setError("");

    try {
      const res = await axios.post("/gemini/ask", { question });
      const newTip = { question, answer: res.data.response };
      setAnswer(res.data.response);
      setHistory([newTip, ...history]);
      setQuestion("");
    } catch (err) {
      setError("Жауап алу кезінде қате орын алды");
      console.error("Ask error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4 md:p-6 lg:p-8 min-h-screen">
      {/* Header Section */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center bg-green-100 dark:bg-green-900/30 p-3 rounded-full mb-4">
          <FiHelpCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
          Ауыл шаруашылығы бойынша кеңестер
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Кез келген сұрақ қойыңыз, біз кәсіби жауап береміз
        </p>
      </div>

      {/* Question Form */}
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="relative mb-4">
          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            rows={4}
            placeholder="Мысалы: Қызанақ отырғызу уақыты қашан? Немесе бидай өсіру технологиясы..."
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition"
            disabled={loading}
          />
        </div>
        <button
          type="submit"
          disabled={loading || !question.trim()}
          className="w-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white font-medium py-3 rounded-lg shadow-md transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70"
        >
          {loading ? (
            <>
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Жауап күтілуде...
            </>
          ) : (
            <>
              <FiSend />
              Сұрақ жіберу
            </>
          )}
        </button>
      </form>

      {/* Error Message */}
      {error && (
        <div className="mb-6 p-4 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-lg flex items-center justify-center">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 mr-2" 
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path 
              fillRule="evenodd" 
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" 
              clipRule="evenodd" 
            />
          </svg>
          {error}
        </div>
      )}

      {/* Current Answer */}
      {answer && (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 mb-8">
          <div className="bg-green-50 dark:bg-gray-700 px-4 py-3 border-b border-gray-200 dark:border-gray-700">
            <h2 className="font-semibold text-lg text-green-700 dark:text-green-400 flex items-center gap-2">
              <FiMessageSquare />
              Жауап:
            </h2>
          </div>
          <div className="p-4">
            <p className="text-gray-800 dark:text-gray-200 whitespace-pre-line leading-relaxed">
              {answer}
            </p>
          </div>
        </div>
      )}

      {/* History Section */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <FiClock className="text-green-600 dark:text-green-400" />
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Алдыңғы сұрақтар
          </h2>
        </div>

        {history.length === 0 ? (
          <div className="text-center py-8 text-gray-500 dark:text-gray-400">
            Әлі сұрақтар жоқ
          </div>
        ) : (
          <div className="space-y-4">
            {history.map((tip, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden border border-gray-200 dark:border-gray-700">
                <div className="p-4">
                  <p className="font-medium text-gray-900 dark:text-white flex items-start gap-2">
                    <span className="text-green-600">❓</span>
                    {tip.question}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mt-2 flex items-start gap-2">
                    <span className="text-green-500">💡</span>
                    {tip.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}