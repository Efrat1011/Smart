import { useEffect, useState } from 'react'
import axios from 'axios'

function Tips() {
  const [tips, setTips] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchTips = async () => {
      try {
        const res = await axios.get('/api/tips')
        setTips(res.data)
      } catch (err) {
        console.error('Кеңестерді жүктеу қатесі', err)
      } finally {
        setLoading(false)
      }
    }

    fetchTips()
  }, [])

  if (loading) return <p className="text-center mt-10">Жүктелуде...</p>

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">💡 Кеңестер</h2>
      {tips.map((tip) => (
        <div key={tip.id} className="mb-6 bg-white dark:bg-slate-800 p-4 rounded-xl shadow">
          <h3 className="text-xl font-semibold">{tip.title}</h3>
          <p className="text-gray-700 dark:text-gray-300">{tip.content}</p>
        </div>
      ))}
    </div>
  )
}

export default Tips
