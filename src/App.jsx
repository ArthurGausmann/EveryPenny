import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [from, setFrom] = useState('USD')
  const [to, setTo] = useState('BRL')
  const [amount, setAmount] = useState('0')
  const [result, setResult] = useState()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const apiKey = 'eaa28caf45f6a0f7a27cedb3fa5e4af5' // Chave de API

  const handleConvert = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const endpoint = 'convert' 
      const url = `https://api.exchangeratesapi.io/v1/${endpoint}?access_key=${apiKey}&from=${from}&to=${to}&amount=${amount}`

      const response = await fetch(url)
      if (!response.ok){
        throw new Error(`Erro HTTP: ${response.status}`)
      }

      const data = await response.json()
      if (!data.success){
        throw new Error(`API Error ${data.error.code}: ${data.error.info}`)
      }

      setResult(data.result)

    } catch(err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <div className='titulo'>
        <h1 className='titulo'>Every Penny</h1>
      </div>

      <img src="/logo.png" alt="Logo Every Penny"  width="200px" height="200px"/>

      <form onSubmit={handleConvert}>
      <div className='converter'>
        <div className='convertin'>
          <div>
            <select id="cin" className='cin' value={from} onChange={(e) => setFrom(e.target.value)}>
              <option value="BRL">BRL</option>
              <option value="USD">USD</option>
              <option value="EUR">EURO</option>
            </select>
          </div>
          <div>
            <input id="amount" type='number' value={amount} onChange={(e) => setAmount(e.target.value)} min='0.01' step='0.01'/>
          </div>
        </div>
        <div className='convertout'>
          <div>
            <select id="cout" className='cout' value={to} onChange={(e) => setTo(e.target.value)}>
              <option value="BRL">BRL</option>
              <option value="USD">USD</option>
              <option value="EUR">EURO</option>
            </select>
          </div>

          <div>
            <input id="result" type='number' readOnly value={result}/>
          </div>
        </div>
      </div>

      <button type='submit' disabled={loading}>Converter</button>
      </form>
    </>
  )
}

export default App
