import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='header'>
        <h1>Every Penny</h1>
        <a href="">Sobre</a>
      </div>
      <div className='content'>
        <div className='sidebar'>
          <button>Dashboard</button>
          <button>Perfis</button>
          <button>Relatório</button>
          <button>Configurações</button>
          <button>Ajuda</button>
        </div>
        <div className='dashboard'>
          <div className='db-header'>
            <img src="" alt="" width='25px' height='25px'/>
            <h2>Perfil 2</h2>
          </div>
          <div className='card-ug'>
            <div className='ug-header'>
              <h3>Últimos gastos</h3>
              <button>+</button>
            </div>
            <div className='ug-content'>
              <ul>
                <li>R$ 35,42 - Comida</li>
                <li>R$ 42,37 - Saúde</li>
                <li>R$ 79,90 - Lazer</li>
                <li>R$ 4,00 - Comida</li>
                <li>R$ 25,00 - Lazer</li>
                <li>R$ 15,42 - Comida</li>
                <li>R$ 82,37 - Saúde</li>
                <li>R$ 29,90 - Lazer</li>
                <li>R$ 2,00 - Comida</li>
                <li>R$ 27,00 - Lazer</li>
                <li>R$ 135,42 - Comida</li>
                <li>R$ 12,37 - Saúde</li>
                <li>R$ 23,90 - Lazer</li>
                <li>R$ 4,00 - Comida</li>
                <li>R$ 35,00 - Lazer</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
