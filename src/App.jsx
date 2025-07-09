import { useState } from 'react'
import './App.css'

function App() {
  const [from, setFrom] = useState('USD') // Define a variável de estado para receber a moeda base para conversão (USD como inicial)
  const [to, setTo] = useState('BRL') // Define a variável de estado para receber a moeda destino para conversão (BRL como inicial)
  const [amount, setAmount] = useState('1') // Define a variável de estado para receber a quantidade que vai ser convertida (1 como inicial)
  const [result, setResult] = useState('') // Define a variável de estado para atualizar o resultado da conversão (vazio como inicial)
  const [loading, setLoading] = useState(false) // Define a variável de estado do carregamento da conversão (falso como inicial)
  const [error, setError] = useState(null) // Define a variável de estado de possíveis erros no sistema (nulo como inicial)

  const handleConvert = async (e) => { // Define a função Handle Convert, que vai receber os parâmetros e realizar a conversão por meio da API
    e.preventDefault() // Previne que a função ralize sua função principal (no caso o form)
    setLoading(true) // Define o carregamento como verdadeiro enquanto a conversão é feita
    setError(null) // Define o erro como nulo

    try { // Executa as funções seguintes
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

    } catch(err) { // Executa casa ocorra uma exceção no 'try' (no caso um erro)
      setError(err.message) // Define a variável 'error' com o erro ocorrido
    } finally { // Executa quando o 'try' finalizar sem erros
      setLoading(false) // Define a variável 'loading' como falsa (pois terminou a conversão)
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