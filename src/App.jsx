import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='titulo'>
        <h1 className='titulo'>Every Penny</h1>
      </div>

      <div className='converter'>
        <div className='convertin'>
          <select name="cin" id="cin" className='cin'>
            <option value="brl">BRL</option>
            <option value="usd">USD</option>
            <option value="euro">EURO</option>
          </select>

          <input type="text" />
        </div>
        <div className='convertout'>
          <select name="cout" id="cout" className='cout'>
            <option value="brl">BRL</option>
            <option value="usd">USD</option>
            <option value="euro">EURO</option>
          </select>
        </div>

      </div>
    </>
  )
}

export default App
