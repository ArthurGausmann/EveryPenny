import { useState } from 'react'
import './App.css'

function App() {
  const [from, setFrom] = useState('USD')
  const [to, setTo] = useState('BRL')
  const [amount, setAmount] = useState('1')
  const [result, setResult] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleConvert = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      if (from == to){
        alert('As moedas não podem ser iguais!')
      }
  
      const response = await fetch(`https://api.frankfurter.app/latest?from=${from}&to=${to}`)
      if (!response.ok){
        throw new Error(`Erro HTTP: ${response.status}`)
      }

      const data = await response.json()
      if (!data.rates || !data.rates[to]){
        throw new Error('Taxa de câmbio indisponível')
      }

      setResult((parseFloat(amount) * data.rates[to]).toFixed(2))

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
            <input id="result" type='text' readOnly value={loading ? "..." : error ? "Erro" : result}/>
          </div>
        </div>
      </div>

      <button className='submit' type='submit' disabled={loading}>Converter</button>
      </form>
    </>
  )
}

export default App
