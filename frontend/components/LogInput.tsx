import { useState } from 'react'

export default function LogInput() {
  const [log, setLog] = useState('')

  const handleSubmit = async () => {
    const res = await fetch('/api/analyze', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ log }),
    })
    const data = await res.json()
    alert(data.analysis)
  }

  return (
    <div className="mt-4">
      <textarea
        className="w-full border p-2"
        rows={5}
        value={log}
        onChange={e => setLog(e.target.value)}
      />
      <button className="bg-blue-500 text-white px-4 py-2 mt-2" onClick={handleSubmit}>
        Analyze
      </button>
    </div>
  )
}
