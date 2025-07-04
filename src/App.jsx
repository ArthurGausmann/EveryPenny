import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='titulo'>
        <h1 className='titulo'>Every Penny</h1>
      </div>

      <img src="/logo.png" alt="Logo Every Penny"  width="200px" height="200px"/>

      <div className='converter'>
        <div className='convertin'>
          <div>
            <select name="cin" id="cin" className='cin'>
              <option value="brl">BRL</option>
              <option value="usd">USD</option>
              <option value="euro">EURO</option>
            </select>
          </div>
          <div>
            <input name="numin" id="numin" type='text' />
          </div>
        </div>
        <div className='convertout'>
          <div>
            <select name="cout" id="cout" className='cout'>
              <option value="brl">BRL</option>
              <option value="usd">USD</option>
              <option value="euro">EURO</option>
            </select>
          </div>

          <div>
            <input name="numout" id="numout" type='text' />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
