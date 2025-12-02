import { useEffect, useState } from 'react'
import Wordle from './components/Wordle'
import words from './data'

function App() {
  const [solution, setSolution] = useState(null)

  useEffect(() => {
    const randomSolution = words[Math.floor(Math.random() * words.length)]
    setSolution(randomSolution)
  }, [setSolution])

  return (
    <div className="App">
      <h1>Wordle</h1>
      {solution && <Wordle solution={solution} />}
    </div>
  )
}

export default App
