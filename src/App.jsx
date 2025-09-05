import { useState } from 'react'
import Modal from './components/Modal'
import './App.css'

function App() {
  const [isModalOpen, setisModalOpen] = useState(false)
  const [ultimosGastos, setUltimosGastos] = useState([]) // Define o useState para a lista de Últimos Gastos
  const [novoUg, setNovoUg] = useState('') // useState para adicionar um novo item a lista Últimos Gastos

  class UltGasto {
    constructor(valor, tipo, data) {
      this.valor = valor;
      this.tipo = tipo;
      this.data = data;
    }

    validarDados() {
      for (let key in this) {
        if (this[key] === undefined || this[key] === "") {
          console.error(`O campo '${key}' é obrigatório!`)
        } return false
      } return true
    }
  }

  function addNovoUg() {
    const valor = document.getElementById('valor').value
    const tipo = document.getElementById('tipo').value
    const data = document.getElementById('data').value

    const ug = new UltGasto(valor, tipo, data)

    if (ug.validarDados()) {
      setUltimosGastos([...ultimosGastos, { text: `R$ ${ug}` }])
    }
  }

  // const addNovoUg = () => {
  //   if (novoUg.trim !== '') {
  //     setUltimosGastos([...ultimosGastos, { text: `R$ ${novoUg}` }]);
  //   }
  // };

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
            <div className='db-profile'>
              <img src="./assets/exemploPerfil.jpeg" alt="Miniatura do Perfil" width='25px' height='25px'/>
              <h2>Perfil 2</h2>
            </div>
            <div className='db-layout'>
              <button>Editar</button>
            </div>
          </div>
          <div className='card-ug'>
            <div className='ug-header'>
              <h3>Últimos gastos</h3>
              <button onClick={() => setisModalOpen(true)}>+</button>
            </div>
            <div className='ug-content'>
              <ul> {ultimosGastos.map((ug, index) => (<li key={index}><span>{ug.text}</span></li>))}
                <li>R$ 35,42 - Comida</li>
              </ul>
            </div>
          </div>
        </div>
        <Modal isOpen={isModalOpen} onClose={() => setisModalOpen(false)}>
          <div className='modalUg'>
            <form action="" className='formUg'>
              <input className='formGroup' type="text" placeholder='R$' value={novoUg} onChange={(e) => setNovoUg(e.target.value)} required />
              <select className='formGroup' name="" id="">
                <option value="">Comida</option>
                <option value="">Lazer</option>
                <option value="">Saúde</option>
                <option value="">Manutenção</option>
                <option value="">Outros</option>
              </select>
              <input className='formGroup' type="date" />
              <button className='formGroup' type='submit' onClick={addNovoUg}>Adcionar</button>
            </form>
          </div>
        </Modal>
      </div>
    </>
  )
}

export default App
