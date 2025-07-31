import { useState, useEffect } from "react";
import axios from "../api/axios";

export default function Tips() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Кеңестер тарихын алу
  const fetchTips = async () => {
    try {
      const res = await axios.get("/gemini/tips");
      setHistory(res.data);
    } catch (err) {
      setError("Кеңестерді жүктеу қатесі");
    }
  };

  useEffect(() => {
    fetchTips();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setAnswer("");
    setError("");

    try {
      const res = await axios.post("/gemini/ask", { question });
      setAnswer(res.data.answer);
      setHistory([{ question, answer: res.data.answer }, ...history]);
      setQuestion("");
    } catch (err) {
      setError("Жауап алу кезінде қате болды.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4 md:p-6 lg:p-8 bg-green-50 dark:bg-gray-900 min-h-screen">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center text-green-800 dark:text-green-300">
        🤖 Ауыл шаруашылығы бойынша кеңестер
      </h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-8">
        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          rows={4}
          placeholder="Мысалы: Қызанақ отырғызу уақыты қашан?"
          className="p-4 border border-green-300 rounded-lg resize-none dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <button
          disabled={loading || !question.trim()}
          className="bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg text-lg font-medium disabled:opacity-50 transition"
        >
          {loading ? "Жауап күтілуде..." : "Сұрау жіберу"}
        </button>
      </form>

      {error && <p className="text-red-500 mb-4 text-center">{error}</p>}

      {answer && (
        <div className="bg-white dark:bg-green-800 p-5 rounded-lg shadow mb-8">
          <h2 className="font-semibold text-xl mb-3 text-green-700 dark:text-white">📌 Жауап:</h2>
          <p className="text-gray-800 dark:text-white whitespace-pre-line leading-relaxed">{answer}</p>
        </div>
      )}

      <div>
        <h2 className="text-2xl font-semibold mb-4 text-green-800 dark:text-green-300">🕘 Алдыңғы кеңестер:</h2>
        <ul className="space-y-4">
          {history.map((tip, idx) => (
            <li key={idx} className="bg-green-100 dark:bg-gray-700 p-4 rounded-lg">
              <p className="font-medium text-green-900 dark:text-white">❓ {tip.question}</p>
              <p className="text-gray-800 dark:text-gray-200 mt-1">💡 {tip.answer}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
