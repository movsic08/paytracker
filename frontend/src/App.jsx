import { useState } from 'react'
import Test from './pages/test'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Test />
    </>
  )
}

export default App
